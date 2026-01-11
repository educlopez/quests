import { useEffect, useState } from "react";

interface TypewriterTextProps {
	text: string;
	className?: string;
	speed?: number;
	delay?: number;
}

export const TypewriterText = ({
	text,
	className = "",
	speed = 50,
	delay = 0,
}: TypewriterTextProps) => {
	const [displayedText, setDisplayedText] = useState("");
	const [started, setStarted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setStarted(true);
		}, delay);

		return () => clearTimeout(timeout);
	}, [delay]);

	useEffect(() => {
		if (!started) return;

		let i = 0;
		const timer = setInterval(() => {
			if (i < text.length) {
				setDisplayedText(text.substring(0, i + 1));
				i++;
			} else {
				clearInterval(timer);
			}
		}, speed);

		return () => clearInterval(timer);
	}, [text, speed, started]);

	return (
		<span className={className}>
			{displayedText}
			<span className="animate-pulse">_</span>
		</span>
	);
};

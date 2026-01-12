import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/8bit/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";
import { cn } from "@/lib/utils";

interface MainMenuProps extends React.ComponentProps<"div"> {
	onClose?: () => void;
}

export default function MainMenu({
	className,
	onClose,
	...props
}: MainMenuProps) {
	const navigate = useNavigate();

	const handleCreateQuest = () => {
		onClose?.();
		navigate({ to: "/quests-create" });
	};

	const handleExit = () => {
		onClose?.();
		setTimeout(() => {
			navigate({ to: "/" });
		}, 100);
	};

	return (
		<Card
			className={cn("border-none shadow-none bg-transparent", className)}
			{...props}
		>
			<CardHeader className="flex flex-col items-center justify-center gap-2 pb-2">
				<CardTitle className="text-2xl">PAUSE</CardTitle>
			</CardHeader>
			<CardContent className="border-none">
				<div className="flex flex-col gap-4">
					<Button className="w-full" onClick={handleCreateQuest}>
						CREATE QUEST
					</Button>

					<a
						href="https://github.com/kapishdima/quests"
						target="_blank"
						rel="noreferrer"
					>
						<Button variant="outline" className="w-full">
							GITHUB
						</Button>
					</a>

					<a href="https://x.com/kapish_dima" target="_blank" rel="noreferrer">
						<Button variant="outline" className="w-full">
							X (TWITTER)
						</Button>
					</a>

					<Button variant="destructive" className="w-full" onClick={handleExit}>
						EXIT
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

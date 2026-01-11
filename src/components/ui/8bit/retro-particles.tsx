import { useEffect, useState } from "react";

export const RetroParticles = () => {
	const [particles, setParticles] = useState<
		{ id: number; left: number; top: number; size: number; duration: number }[]
	>([]);

	useEffect(() => {
		const newParticles = Array.from({ length: 20 }).map((_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: Math.random() * 4 + 2,
			duration: Math.random() * 10 + 10,
		}));
		setParticles(newParticles);
	}, []);

	return (
		<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
			{particles.map((p) => (
				<div
					key={p.id}
					className="absolute bg-white/10 animate-pulse"
					style={{
						left: `${p.left}%`,
						top: `${p.top}%`,
						width: `${p.size}px`,
						height: `${p.size}px`,
						animation: `float-up ${p.duration}s linear infinite`,
					}}
				/>
			))}
			<style>
				{`
          @keyframes float-up {
            0% { transform: translateY(100vh); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-100px); opacity: 0; }
          }
        `}
			</style>
		</div>
	);
};

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import AudioSettings from "@/components/ui/8bit/blocks/audio-settings";
import { Button } from "@/components/ui/8bit/button";
import { playPrevSound } from "@/hooks/use-sound";

export const Route = createFileRoute("/settings")({
	component: Settings,
});

function Settings() {
	return (
		<main className="px-6.5 py-10 max-w-md mx-auto">
			<Link to="/quests" className="inline-block mb-6" onClick={playPrevSound}>
				<Button variant="outline" size="sm">
					<ArrowLeft />
					Back to Quests
				</Button>
			</Link>

			<AudioSettings />
		</main>
	);
}

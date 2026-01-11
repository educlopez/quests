import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { DifficultBadge } from "@/components/difficult-badge";
import { Badge } from "@/components/ui/8bit/badge";
import { Button } from "@/components/ui/8bit/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/8bit/card";
import { Separator } from "@/components/ui/8bit/separator";

export const Route = createFileRoute("/quest/$id")({ component: QuestDetail });

function QuestDetail() {
	const { id } = Route.useParams();

	// TODO: fetch quest data by id
	const quest = {
		id,
		title: "Pixel Art Editor",
		description:
			"Create retro-style pixel art with layers, animation support and export to PNG/GIF.",
		difficulty: "easy" as const,
		duration: "~2 weeks",
		tags: ["Canvas API", "React", "TypeScript"],
		details: `Build a browser-based pixel art editor with the following features:

• Drawing tools: pencil, eraser, fill bucket, color picker
• Layer system with opacity and blend modes
• Animation timeline for creating sprite animations
• Export to PNG, GIF, and custom format
• Undo/redo history
• Keyboard shortcuts for common actions`,
		requirements: [
			"Understanding of HTML Canvas API",
			"Basic React knowledge",
			"Familiarity with state management",
		],
	};

	const levelColor = {
		easy: "border-green-500 bg-green-500",
		medium: "border-yellow-500 bg-yellow-500",
		difficult: "border-red-500 bg-red-500",
	};

	return (
		<main className="px-6.5 py-10 max-w-3xl mx-auto">
			<Link to="/" className="inline-block mb-6">
				<Button variant="outline" size="sm">
					<ArrowLeft />
					Back to Quests
				</Button>
			</Link>

			<Card>
				<CardHeader>
					<div className="flex items-center justify-between gap-4">
						<DifficultBadge />
						<span className="text-sm text-muted-foreground">
							{quest.duration}
						</span>
					</div>
					<CardTitle className="text-2xl mt-4">{quest.title}</CardTitle>
					<CardDescription className="text-base">
						{quest.description}
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-6">
					<div>
						<h3 className="font-bold mb-2">Tech Stack</h3>
						<div className="flex flex-wrap gap-x-4 gap-y-2">
							{quest.tags.map((tag) => (
								<Badge key={tag} className="bg-accent">
									{tag}
								</Badge>
							))}
						</div>
					</div>

					<Separator />

					<div>
						<h3 className="font-bold mb-2">Quest Details</h3>
						<p className="whitespace-pre-line text-muted-foreground">
							{quest.details}
						</p>
					</div>

					<Separator />

					<div>
						<h3 className="font-bold mb-2">Requirements</h3>
						<ul className="list-disc list-inside text-muted-foreground space-y-1">
							{quest.requirements.map((req) => (
								<li key={req}>{req}</li>
							))}
						</ul>
					</div>

					<Separator />

					<Button className="w-full">Start This Quest</Button>
				</CardContent>
			</Card>
		</main>
	);
}

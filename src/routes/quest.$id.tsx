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
import type { Quest } from "@/generated/prisma/client";
import { getQuestById } from "@/utils/quests.functions";

export const Route = createFileRoute("/quest/$id")({
	component: QuestDetail,
	loader: async ({ params }) => await getQuestById({ data: { id: params.id } }),
});

function QuestDetail() {
	const quest = Route.useLoaderData() as Quest | null;

	if (!quest) {
		return (
			<main className="px-6.5 py-10 max-w-3xl mx-auto">
				<p className="text-center text-muted-foreground">Quest not found.</p>
				<div className="text-center mt-6">
					<Link to="/quests">
						<Button variant="outline" size="sm">
							<ArrowLeft />
							Back to Quests
						</Button>
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="px-6.5 py-10 max-w-3xl mx-auto">
			<Link to="/quests" className="inline-block mb-6">
				<Button variant="outline" size="sm">
					<ArrowLeft />
					Back to Quests
				</Button>
			</Link>

			<Card>
				<CardHeader>
					<div className="flex items-center justify-between gap-4">
						<DifficultBadge
							level={quest.difficulty as "easy" | "medium" | "hard"}
						/>
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

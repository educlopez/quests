import { Link } from "@tanstack/react-router";
import type { Quest } from "@/generated/prisma/client";
import { playNextSound } from "@/hooks/use-sound";
import { DifficultBadge } from "./difficult-badge";
import { Badge } from "./ui/8bit/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/8bit/card";
import { Separator } from "./ui/8bit/separator";
import { Skeleton } from "./ui/8bit/skeleton";

type QuestCardProps = {
	quest: Quest;
};

export const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
	return (
		<Link
			to="/quest/$id"
			params={{ id: quest.id }}
			className="block hover:opacity-90 transition-opacity"
			onClick={playNextSound}
		>
			<Card className="retro-hover-effect h-full">
				<CardHeader>
					<div className="flex items-center justify-between">
						<DifficultBadge
							level={quest.difficulty as "easy" | "medium" | "hard"}
						/>
						<span className="text-xs text-muted-foreground">
							{quest.duration}
						</span>
					</div>
					<CardTitle className="mt-2">{quest.title}</CardTitle>
					<CardDescription>{quest.description}</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-4" />
					<div className="flex flex-wrap gap-x-4 gap-y-2">
						{quest.tags.map((tag) => (
							<Badge key={tag} className="bg-accent">
								{tag}
							</Badge>
						))}
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

export const QuestCardSkeleton: React.FC = () => {
	return (
		<Card className="retro-hover-effect h-full">
			<CardHeader>
				<Skeleton className="w-16 h-6 mb-4" />
				<CardTitle>
					<Skeleton className="w-3/4 h-8 mb-2" />
				</CardTitle>
				<CardDescription>
					<Skeleton className="w-full h-4 mb-1" />
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Separator className="mb-4" />
			</CardContent>
		</Card>
	);
};

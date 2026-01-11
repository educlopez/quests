import { Link } from "@tanstack/react-router";
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

export const QuestCard = () => {
	return (
		<Link
			to="/quest/$id"
			params={{ id: "1" }}
			className="block hover:opacity-90 transition-opacity"
		>
			<Card>
				<CardHeader>
					<div className="flex items-center justify-between">
						<DifficultBadge level="easy" />
						<span className="text-xs text-muted-foreground">~2 weeks</span>
					</div>
					<CardTitle className="mt-2">Pixel Art Editor</CardTitle>
					<CardDescription>
						Create retro-style pixel art with layers, animation support and
						export to PNG/GIF.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-4" />
					<div className="flex flex-wrap gap-x-4 gap-y-2">
						<Badge className="bg-accent">Canvas API</Badge>
						<Badge className="bg-accent">React</Badge>
						<Badge className="bg-accent">TypeScript</Badge>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

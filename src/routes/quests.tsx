import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";
import { Filters } from "@/components/filters";
import { QuestCard } from "@/components/quest-card";
import type { Quest } from "@/generated/prisma/client";
import { getQuests as getServerQuests } from "@/utils/quests.functions";

export const Route = createFileRoute("/quests")({
	// loader: () => getServerQuests(),
	component: QuestsPage,
});

function QuestsPage() {
	const getQuests = useServerFn(getServerQuests);

	const [difficulty] = useQueryState("difficulty");
	const [duration] = useQueryState("duration");
	const [tech] = useQueryState("tech", parseAsArrayOf(parseAsString));
	const [sort] = useQueryState("sort");

	const { data: quests, isPending } = useQuery<Quest[]>({
		queryKey: ["quests", { difficulty, duration, tech, sort }],
		queryFn: () => getQuests({ data: { difficulty, duration, tech, sort } }),
	});

	if (isPending) {
		return <div className=""></div>;
	}

	if (!quests) {
		return <h1>No quests found</h1>;
	}

	return (
		<main className="px-6.5 py-20 retro-bg min-h-screen">
			<Filters />
			{quests.length > 0 ? (
				<div className="grid grid-cols-3 gap-6 py-10 retro-stagger-children">
					{quests.map((quest) => (
						<QuestCard key={quest.id} quest={quest} />
					))}
				</div>
			) : (
				<p className="retro text-left text-muted-foreground text-xl pt-10">
					No quests found matching the selected filters.
				</p>
			)}
		</main>
	);
}

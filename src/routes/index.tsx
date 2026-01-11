import { createFileRoute } from "@tanstack/react-router";
import { Filters } from "@/components/filters";
import { QuestCard } from "@/components/quest-card";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="px-6.5 py-20">
			<Filters />
			<div className="grid grid-cols-3 gap-6  py-10">
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
				<QuestCard />
			</div>
		</main>
	);
}

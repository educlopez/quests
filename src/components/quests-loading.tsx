import { QuestCardSkeleton } from "./quest-card";

export const QuestsLoading: React.FC = () => {
	return (
		<main className="px-6.5 py-20 retro-bg min-h-screen">
			<div className="grid grid-cols-3 gap-4">
				<QuestCardSkeleton />
				<QuestCardSkeleton />
				<QuestCardSkeleton />
				<QuestCardSkeleton />
				<QuestCardSkeleton />
				<QuestCardSkeleton />
			</div>
		</main>
	);
};

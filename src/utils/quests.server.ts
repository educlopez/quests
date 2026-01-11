import { prisma } from "@/db";
import type { Prisma, Quest } from "@/generated/prisma/client";

export type QuestFilters = {
	difficulty?: string | null;
	duration?: string | null;
	tech?: string[] | null;
	sort?: string | null;
};

const durationMap: Record<string, string[]> = {
	weekend: ["Weekend"],
	"1week": ["~1 Week"],
	"2weeks": ["~2 Weeks", "~3 Weeks"],
	month: ["1+ Month"],
};

export const fetchQuests = async (filters?: QuestFilters): Promise<Quest[]> => {
	const where: Prisma.QuestWhereInput = {};

	if (filters?.difficulty) {
		where.difficulty = filters.difficulty;
	}

	if (filters?.duration) {
		const validDurations = durationMap[filters.duration];
		if (validDurations) {
			where.duration = { in: validDurations };
		}
	}

	if (filters?.tech && filters.tech.length > 0) {
		where.tags = { hasSome: filters.tech };
	}

	return await prisma.quest.findMany({
		where,
		orderBy: { createdAt: "desc" },
	});
};

export const fetchQuestById = async (id: string): Promise<Quest | null> => {
	return await prisma.quest.findUnique({
		where: { id },
	});
};

export const createQuest = async (data: Prisma.QuestCreateInput): Promise<Quest> => {
	return await prisma.quest.create({
		data,
	});
};

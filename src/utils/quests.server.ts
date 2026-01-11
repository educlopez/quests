import { db } from "@/db";
import { quests, type Quest, type NewQuest } from "@/db/schema";
import { eq, desc, inArray, arrayOverlaps, and } from "drizzle-orm";

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
	const conditions = [];

	if (filters?.difficulty) {
		conditions.push(eq(quests.difficulty, filters.difficulty));
	}

	if (filters?.duration) {
		const validDurations = durationMap[filters.duration];
		if (validDurations) {
			conditions.push(inArray(quests.duration, validDurations));
		}
	}

	if (filters?.tech && filters.tech.length > 0) {
		conditions.push(arrayOverlaps(quests.tags, filters.tech));
	}

	return await db
		.select()
		.from(quests)
		.where(conditions.length > 0 ? and(...conditions) : undefined)
		.orderBy(desc(quests.createdAt));
};

export const fetchQuestById = async (id: string): Promise<Quest | null> => {
	const result = await db.select().from(quests).where(eq(quests.id, id));
	return result[0] ?? null;
};

export const createQuest = async (data: NewQuest): Promise<Quest> => {
	const result = await db.insert(quests).values(data).returning();
	return result[0];
};

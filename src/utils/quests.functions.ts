import { createServerFn } from "@tanstack/react-start";
import { QuestCreateInput } from "@/generated/prisma/models/Quest";
import {
	fetchQuestById,
	fetchQuests,
	createQuest as saveQuest,
} from "./quests.server";

export const getQuests = createServerFn({ method: "GET" }).handler(
	async ({ data }) => fetchQuests(data),
);
export const getQuestById = createServerFn({ method: "GET" })
	.inputValidator((data: { id: string }) => data)
	.handler(async ({ data }) => fetchQuestById(data.id));

export const createQuest = createServerFn({ method: "POST" })
	.inputValidator(
		(data: Omit<QuestCreateInput, "id" | "createdAt" | "updatedAt">) => data,
	)
	.handler(async ({ data }) => {
		return saveQuest(data);
	});

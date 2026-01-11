import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const quests = pgTable("quests", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	difficulty: text("difficulty").notNull(),
	duration: text("duration").notNull(),
	tags: text("tags").array().notNull(),
	details: text("details").notNull(),
	requirements: text("requirements").array().notNull(),
	createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
});

export type Quest = typeof quests.$inferSelect;
export type NewQuest = typeof quests.$inferInsert;

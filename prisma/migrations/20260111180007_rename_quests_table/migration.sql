/*
  Warnings:

  - You are about to drop the `Quest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Quest";

-- CreateTable
CREATE TABLE "quests" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficult" TEXT NOT NULL,
    "stack" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quests_pkey" PRIMARY KEY ("id")
);

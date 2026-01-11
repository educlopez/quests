/*
  Warnings:

  - You are about to drop the column `difficult` on the `quests` table. All the data in the column will be lost.
  - You are about to drop the column `stack` on the `quests` table. All the data in the column will be lost.
  - Added the required column `details` to the `quests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `quests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `quests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "quests" DROP COLUMN "difficult",
DROP COLUMN "stack",
ADD COLUMN     "details" TEXT NOT NULL,
ADD COLUMN     "difficulty" TEXT NOT NULL,
ADD COLUMN     "duration" TEXT NOT NULL,
ADD COLUMN     "requirements" TEXT[],
ADD COLUMN     "tags" TEXT[];

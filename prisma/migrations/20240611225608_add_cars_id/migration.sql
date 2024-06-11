-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_ownerId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cars" TEXT[];

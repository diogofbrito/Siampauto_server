/*
  Warnings:

  - You are about to drop the `Carros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FotosCarros` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Marca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Carros" DROP CONSTRAINT "Carros_marca_id_fkey";

-- DropForeignKey
ALTER TABLE "FotosCarros" DROP CONSTRAINT "FotosCarros_carrosId_fkey";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_carros_id_fkey";

-- DropTable
DROP TABLE "Carros";

-- DropTable
DROP TABLE "FotosCarros";

-- DropTable
DROP TABLE "Marca";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "pedidos";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "nif" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "mileage" DOUBLE PRECISION NOT NULL,
    "fuelType" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nif_key" ON "User"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

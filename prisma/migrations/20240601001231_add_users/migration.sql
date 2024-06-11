/*
  Warnings:

  - You are about to drop the `Clientes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_cliente_id_fkey";

-- DropTable
DROP TABLE "Clientes";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nif" TEXT NOT NULL,
    "teste" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_nif_key" ON "Users"("nif");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

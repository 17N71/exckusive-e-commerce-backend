/*
  Warnings:

  - You are about to drop the column `genreId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `genreSlug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_genreId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "genreId",
ADD COLUMN     "genreSlug" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_genreSlug_fkey" FOREIGN KEY ("genreSlug") REFERENCES "Genre"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

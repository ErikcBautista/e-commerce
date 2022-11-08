-- CreateTable
CREATE TABLE "BoughtProducts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "BoughtProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE
);

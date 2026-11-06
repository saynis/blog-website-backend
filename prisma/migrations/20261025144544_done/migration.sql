-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "dob" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "students_dob_key" ON "students"("dob");

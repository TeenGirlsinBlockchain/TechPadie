-- CreateTable
CREATE TABLE "techpadie_schema"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "preferredLanguage" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "otp" TEXT,
    "otpExpiresAt" TIMESTAMP(3),
    "techpadieReason" TEXT,
    "educationLevel" TEXT,
    "preferredSocialMedia" TEXT,
    "applicationMode" TEXT,
    "web3Experience" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "techpadie_schema"."Course" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "techpadie_schema"."Quiz" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "techpadie_schema"."User"("email");

-- AddForeignKey
ALTER TABLE "techpadie_schema"."Quiz" ADD CONSTRAINT "Quiz_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "techpadie_schema"."Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

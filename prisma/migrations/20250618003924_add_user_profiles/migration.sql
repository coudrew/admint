-- CreateTable
CREATE TABLE "user_profiles" (
    "id" UUID NOT NULL,
    "username" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

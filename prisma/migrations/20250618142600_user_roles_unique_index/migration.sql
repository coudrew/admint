/*
  Warnings:

  - A unique constraint covering the columns `[id,tenant_id]` on the table `roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,tenant_id]` on the table `workspaces` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tenant_id` to the `user_roles` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user_roles" DROP CONSTRAINT "user_roles_workspace_id_fkey";

-- AlterTable
ALTER TABLE "user_roles" ADD COLUMN     "tenant_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "roles_id_tenant_id_key" ON "roles"("id", "tenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "workspaces_id_tenant_id_key" ON "workspaces"("id", "tenant_id");

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_id_tenant_id_fkey" FOREIGN KEY ("role_id", "tenant_id") REFERENCES "roles"("id", "tenant_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_workspace_id_tenant_id_fkey" FOREIGN KEY ("workspace_id", "tenant_id") REFERENCES "workspaces"("id", "tenant_id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "account" RENAME COLUMN "eExpiresAt" TO "expiresAt";--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN IF EXISTS "provider";
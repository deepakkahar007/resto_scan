CREATE TYPE "cuisine" AS ENUM('indian', 'chinese', 'italian', 'mexican', 'american', 'other');--> statement-breakpoint
CREATE TYPE "item_type" AS ENUM('veg', 'non_veg', 'egg', 'drink', 'other');--> statement-breakpoint
CREATE TABLE "addon" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"item_id" uuid NOT NULL,
	"addon_name" varchar NOT NULL,
	"price" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "address" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"restaurent_id" uuid NOT NULL,
	"address" varchar NOT NULL,
	"city" varchar NOT NULL,
	"state" varchar NOT NULL,
	"zip" varchar NOT NULL,
	"country" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"restaurent_id" uuid NOT NULL,
	"address_id" uuid NOT NULL,
	"category" varchar NOT NULL,
	"icon" varchar,
	"pin_to_top" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE "item" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"restaurent_id" uuid NOT NULL,
	"categories_id" uuid NOT NULL,
	"name" varchar NOT NULL,
	"description" text NOT NULL,
	"item_type" "item_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "quantity" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"item_id" uuid NOT NULL,
	"quantity" varchar NOT NULL,
	"price" integer NOT NULL,
	"discounted_price" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "restaurent" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"organization_id" varchar NOT NULL,
	"name" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"description" text NOT NULL,
	"categories" varchar NOT NULL,
	"icon" varchar NOT NULL,
	"cover_image" varchar,
	"cuisine" "cuisine" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subcategory" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"restaurent_id" uuid NOT NULL,
	"categories_id" uuid NOT NULL,
	"subcategory" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "account" (
	"id" text PRIMARY KEY,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"user_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"id_token" text,
	"access_token_expires_at" timestamp,
	"refresh_token_expires_at" timestamp,
	"scope" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "invitation" (
	"id" text PRIMARY KEY,
	"organization_id" text NOT NULL,
	"email" text NOT NULL,
	"role" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"inviter_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "member" (
	"id" text PRIMARY KEY,
	"organization_id" text NOT NULL,
	"user_id" text NOT NULL,
	"role" text DEFAULT 'member' NOT NULL,
	"created_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organization" (
	"id" text PRIMARY KEY,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"logo" text,
	"created_at" timestamp NOT NULL,
	"metadata" text
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY,
	"expires_at" timestamp NOT NULL,
	"token" text NOT NULL UNIQUE,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"user_id" text NOT NULL,
	"impersonated_by" text,
	"active_organization_id" text
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY,
	"name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"email_verified" boolean DEFAULT false NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"role" text,
	"banned" boolean DEFAULT false,
	"ban_reason" text,
	"ban_expires" timestamp
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY,
	"identifier" text NOT NULL,
	"value" text NOT NULL,
	"expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "addon_item_id_idx" ON "addon" ("item_id");--> statement-breakpoint
CREATE INDEX "address_restaurant_id_idx" ON "address" ("restaurent_id");--> statement-breakpoint
CREATE INDEX "categories_restaurant_id_idx" ON "categories" ("restaurent_id");--> statement-breakpoint
CREATE INDEX "categories_address_id_idx" ON "categories" ("address_id");--> statement-breakpoint
CREATE INDEX "item_restaurant_id_idx" ON "item" ("restaurent_id");--> statement-breakpoint
CREATE INDEX "item_category_id_idx" ON "item" ("categories_id");--> statement-breakpoint
CREATE INDEX "quantity_item_id_idx" ON "quantity" ("item_id");--> statement-breakpoint
CREATE INDEX "restaurent_organization_id_idx" ON "restaurent" ("organization_id");--> statement-breakpoint
CREATE INDEX "subcategory_restaurant_id_idx" ON "subcategory" ("restaurent_id");--> statement-breakpoint
CREATE INDEX "subcategory_category_id_idx" ON "subcategory" ("categories_id");--> statement-breakpoint
CREATE INDEX "account_userId_idx" ON "account" ("user_id");--> statement-breakpoint
CREATE INDEX "invitation_organizationId_idx" ON "invitation" ("organization_id");--> statement-breakpoint
CREATE INDEX "invitation_email_idx" ON "invitation" ("email");--> statement-breakpoint
CREATE INDEX "member_organizationId_idx" ON "member" ("organization_id");--> statement-breakpoint
CREATE INDEX "member_userId_idx" ON "member" ("user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "organization_slug_uidx" ON "organization" ("slug");--> statement-breakpoint
CREATE INDEX "session_userId_idx" ON "session" ("user_id");--> statement-breakpoint
CREATE INDEX "verification_identifier_idx" ON "verification" ("identifier");--> statement-breakpoint
ALTER TABLE "addon" ADD CONSTRAINT "addon_item_id_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("id");--> statement-breakpoint
ALTER TABLE "address" ADD CONSTRAINT "address_restaurent_id_restaurent_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent"("id");--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_restaurent_id_restaurent_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent"("id");--> statement-breakpoint
ALTER TABLE "categories" ADD CONSTRAINT "categories_address_id_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id");--> statement-breakpoint
ALTER TABLE "item" ADD CONSTRAINT "item_restaurent_id_restaurent_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent"("id");--> statement-breakpoint
ALTER TABLE "item" ADD CONSTRAINT "item_categories_id_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("id");--> statement-breakpoint
ALTER TABLE "quantity" ADD CONSTRAINT "quantity_item_id_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("id");--> statement-breakpoint
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_restaurent_id_restaurent_id_fkey" FOREIGN KEY ("restaurent_id") REFERENCES "restaurent"("id");--> statement-breakpoint
ALTER TABLE "subcategory" ADD CONSTRAINT "subcategory_categories_id_categories_id_fkey" FOREIGN KEY ("categories_id") REFERENCES "categories"("id");--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "invitation" ADD CONSTRAINT "invitation_organization_id_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "invitation" ADD CONSTRAINT "invitation_inviter_id_user_id_fkey" FOREIGN KEY ("inviter_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "member" ADD CONSTRAINT "member_organization_id_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "member" ADD CONSTRAINT "member_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;
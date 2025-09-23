DO $$ BEGIN
 CREATE TYPE "fee_status" AS ENUM('pending', 'paid', 'expired', 'waived');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "club_member_status" AS ENUM('active', 'affiliate', 'no');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "member_status" AS ENUM('active', 'inactive', 'delinquent');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "user_role" AS ENUM('admin', 'collector', 'viewer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"fee_amount" numeric(100, 2),
	"created_at" timestamp,
	"created_by" integer,
	"updated_at" timestamp,
	"updated_by" integer,
	"enabled" boolean,
	"deleted" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "fee" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_id" integer NOT NULL,
	"period" varchar(7) NOT NULL,
	"name" text NOT NULL,
	"issue_date" timestamp DEFAULT now() NOT NULL,
	"due_date" timestamp NOT NULL,
	"amount" numeric(100, 2) NOT NULL,
	"status" "fee_status" DEFAULT 'pending' NOT NULL,
	"created_at" timestamp,
	"created_by" integer,
	"updated_at" timestamp,
	"updated_by" integer,
	"enabled" boolean,
	"deleted" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "member" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_number" integer NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"dni" text NOT NULL,
	"birthday" timestamp,
	"address" text NOT NULL,
	"phone" text,
	"email" text,
	"status" "member_status" DEFAULT 'active' NOT NULL,
	"club_member" "club_member_status" DEFAULT 'no' NOT NULL,
	"category_id" integer NOT NULL,
	"created_at" timestamp,
	"created_by" integer,
	"updated_at" timestamp,
	"updated_by" integer,
	"enabled" boolean,
	"deleted" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payment" (
	"id" serial PRIMARY KEY NOT NULL,
	"fee_id" integer NOT NULL,
	"payment_date" timestamp DEFAULT now() NOT NULL,
	"amount_paid" numeric(100, 2) NOT NULL,
	"method" text NOT NULL,
	"created_at" timestamp,
	"created_by" integer,
	"updated_at" timestamp,
	"updated_by" integer,
	"enabled" boolean,
	"deleted" boolean
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "user_role" DEFAULT 'viewer' NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category" ADD CONSTRAINT "category_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "category" ADD CONSTRAINT "category_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fee" ADD CONSTRAINT "fee_member_id_member_id_fk" FOREIGN KEY ("member_id") REFERENCES "member"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fee" ADD CONSTRAINT "fee_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "fee" ADD CONSTRAINT "fee_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "member" ADD CONSTRAINT "member_category_id_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "member" ADD CONSTRAINT "member_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "member" ADD CONSTRAINT "member_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payment" ADD CONSTRAINT "payment_fee_id_fee_id_fk" FOREIGN KEY ("fee_id") REFERENCES "fee"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payment" ADD CONSTRAINT "payment_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payment" ADD CONSTRAINT "payment_updated_by_user_id_fk" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

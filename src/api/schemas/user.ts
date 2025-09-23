// Drizzle
import {boolean, pgTable, serial, text, timestamp, pgEnum} from 'drizzle-orm/pg-core';

export const userRoleEnum = pgEnum("user_role", ["admin", "collector", "viewer"]);

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	firstName: text('first_name'),
	lastName: text('last_name'),
	userName: text('user_name'),
	email: text('email'),
	role: userRoleEnum('role').default('viewer').notNull(),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at'),
	enabled: boolean('enabled'),
	deleted: boolean('deleted'),
});

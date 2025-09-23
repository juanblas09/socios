// Drizzle - Cuotas
import {boolean, pgEnum, pgTable, serial, text, timestamp, integer, varchar, decimal} from 'drizzle-orm/pg-core';
import {member} from "./member";
import {user} from "./user";

export const feeStatusEnum = pgEnum("fee_status", ["pending", "paid", "expired", "waived"]);

export const fee = pgTable ('fee', {
    id: serial('id').primaryKey(),
    memberId: integer('member_id').references(() => member.id).notNull(),
    period: varchar('period', {length: 7 }).notNull(), // ej. 2025-09
    name: text('name').notNull(),
    issueDate: timestamp('issue_date').defaultNow().notNull(),
    dueDate: timestamp('due_date').notNull(),
    amount: decimal('amount', {precision:100, scale:2}).notNull(),
    status: feeStatusEnum('status').default('pending').notNull(),
    createdAt: timestamp('created_at'),
    createdBy: integer('created_by').references(() => user.id),
    updatedAt: timestamp('updated_at'),
    updatedBy: integer('updated_by').references(() => user.id),
    enabled: boolean('enabled'),
    deleted: boolean('deleted'),
})
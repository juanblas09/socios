//Drizzle
import {pgTable, serial, text, decimal, timestamp, boolean, integer} from 'drizzle-orm/pg-core';
import {user} from "./user";

export const category = pgTable('category', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description'),
    feeAmount: decimal('fee_amount', {precision: 100, scale: 2}),
    createdAt: timestamp('created_at'),
    createdBy: integer('created_by').references(() => user.id),
    updatedAt: timestamp('updated_at'),
    updatedBy: integer('updated_by').references(() => user.id),
    enabled: boolean('enabled'),
    deleted: boolean('deleted'),
})
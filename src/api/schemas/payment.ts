// Drizzle - Pagos
import {boolean, pgTable, serial, text, timestamp, integer, decimal} from 'drizzle-orm/pg-core';
import {user} from './user';
import {fee} from './fee';

export const payment = pgTable('payment', {
    id: serial('id').primaryKey(),
    feeId: integer('fee_id').references(() => fee.id).notNull(),
    paymentDate: timestamp('payment_date').defaultNow().notNull(),
    amountPaid: decimal('amount_paid', {precision:100, scale:2}).notNull(),
    method: text('method').notNull(),
    createdAt: timestamp('created_at'),
    createdBy: integer('created_by').references(() => user.id),
    updatedAt: timestamp('updated_at'),
    updatedBy: integer('updated_by').references(() => user.id),
    enabled: boolean('enabled'),
    deleted: boolean('deleted'),
})
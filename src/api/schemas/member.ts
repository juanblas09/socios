// Drizzle
import {boolean, pgEnum, pgTable, serial, text, timestamp, integer} from 'drizzle-orm/pg-core';
import {category} from "./category";
import {user} from "./user";

export const memberStatusEnum = pgEnum("member_status", ["active", "inactive", "delinquent"]);
export const clubMemberStatusEnum = pgEnum("club_member_status", ["active", "affiliate", "no"]);

export const member = pgTable('member', {
    id: serial('id').primaryKey(),
    memberNumber: integer('member_number').notNull(),
    firstName: text('first_name').notNull(),
    lastName: text('last_name').notNull(),
    dni: text('dni').notNull(),
    birthday: timestamp('birthday'),
    address: text('address').notNull(),
    phone: text('phone'),
    email: text('email'),
    status: memberStatusEnum('status').default('active').notNull(), // Estado socio peña
    clubMember: clubMemberStatusEnum('club_member').default('no').notNull(), // Estado como socio de Boca
    categoryId: integer('category_id').references(()=> category.id).notNull(),
    createdAt: timestamp('created_at'),
    createdBy: integer('created_by').references(() => user.id),
    updatedAt: timestamp('updated_at'),
    updatedBy: integer('updated_by').references(() => user.id),
    enabled: boolean('enabled'),
    deleted: boolean('deleted'),
})
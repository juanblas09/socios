import * as schemas from '../schemas/member';
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm'

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getById(id: number) {
    return db.query.member.findFirst({ where: eq(schemas.member.id, id) })
}

export async function getByMemberNumber(memberNumber: number) {
    return db.query.member.findFirst({ where: eq(schemas.member.memberNumber, memberNumber) })
}

export async function getAll() {
    return db.query.member.findMany();
}
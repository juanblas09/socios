import * as schemas from '../schemas/category';
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getAll() {
    return db.query.category.findMany();
}
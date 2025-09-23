import * as schemas from '../schemas/user';
import { pgClient } from '../_helpers/postgres-connector'
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm'

const db = drizzle(pgClient, { schema: { ...schemas } });

export async function getById(id: number) {
    return db.query.user.findFirst({ where: eq(schemas.user.id, id) })
}

export async function getByEmail(email: string) {
    return db.query.user.findFirst({ where: eq(schemas.user.email, email) })
}

export async function create({ firstName, lastName, userName, email }: any) {
    const newUser = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        createdAt: new Date(),
        updatedAt: new Date(),
        enabled: false,
        deleted: false
    };

    await db.insert(schemas.user).values(newUser);
/*    const res = await db.insert(schemas.user).values(newUser).returning(schemas.user.id);

    if (res.length === 0) {
        throw new Error('No se pudo crear el usuario');
    }
    const newUserId = res[0].id;
    const createdUser = await db.query.user.findFirst({
        where: eq(schemas.user.id, newUserId),
    });

    return createdUser;*/
}

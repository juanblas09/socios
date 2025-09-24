import { Audit } from './audit.interface'

export type UserRole = 'admin' | 'collector' | 'viewer';

export interface User extends Audit {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    role: UserRole;
}

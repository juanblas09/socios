import { Audit } from "./audit.interface";

export interface Member extends Audit {
    id: number;
    memberNumber: number;
    firstName: string;
    lastName: string;
    dni: string;
    birthday: Date | null;
    address: string;
    phone: string | null;
    email: string | null;
    status: 'active' | 'inactive' | 'delinquent'; // Estado socio peña
    clubMember: 'active' | 'affiliate' | 'no'; // Estado como socio de Boca
    categoryId: number;
}
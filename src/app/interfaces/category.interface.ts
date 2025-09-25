import { Audit } from './audit.interface';

export interface Category extends Audit {
    id: number;
    name: string;
    description: string;
    feeAmount: number;
}
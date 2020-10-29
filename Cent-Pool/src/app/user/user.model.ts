export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    poolId?: number;
    contractId?: number;
    dateOfBirth: Date;
    gender?: string;
}

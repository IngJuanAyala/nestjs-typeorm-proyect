
export class CreateClientDto {
    code: number;
    address?: string;
    phone?: number;
    firstName: string;
    lastName: string;
    email: string;
    dni: string;
    birthDate: Date;
    enrollmentDate: Date;
    interestTopic?: string;
    state: boolean;
}
export enum UserRole{
    ADMIN,
    MODER,
    USER
}

export enum UserStatus{
    ONLINE,
    OFFLINE
}

export interface User {
    id: number;
    name: string;
    status: UserStatus,
    role: UserRole;
    birthdate: Date;
}

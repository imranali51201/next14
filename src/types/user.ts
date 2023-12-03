export interface IUser {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    id: string
}

export type CreateUserType = Omit<IUser, "id">
export interface Users {
    name: string,
    surname: string,
    email: string,
    id: string, 
    position: string | 'pracownik',
    is_admin?: boolean,
    projects?: Array<number>,
    tasks?: Array<number>,
    department: string,
    assignUserToProject?: () => void,
    assignUsersFromEditProject?: () => void,
    isFromEdition: boolean,
    _id: string,
    user_id: number | null,
    password: string,
}

export interface RegisterUserData {
    name: string,
    surname: string,
    email: string,
    password: string,
    replayPassword: string,
    user_id: string,
}
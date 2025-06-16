import {USER_ROLES} from "../constants/user-roles.constant";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    token: string;
}

export interface IUserContext {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    setUserData: (userData: Partial<User>) => void;
    user: User | null;
}

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES];
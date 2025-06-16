import {use} from "react";

// Interfaces
import {IUserContext} from "../interfaces/user.interface";

// Store
import {UserContext} from "../store/user.store";

export const useUser: () => IUserContext = (): IUserContext => {
    const context: IUserContext | undefined = use(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
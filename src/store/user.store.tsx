import {createContext, useState, useCallback, ReactNode, Context, ReactElement} from 'react';

// Interfaces
import {IUserContext, User} from '../interfaces/user.interface'

export const UserContext: Context<IUserContext | undefined> = createContext<IUserContext | undefined>(undefined);

export const UserProvider: ({children}: { children: ReactNode }) => ReactElement<any, any> = ({ children }: { children: ReactNode }): ReactElement<any, any> => {
    const [user, setUser] = useState<User | null>(null);

    const login: (token: string) => void = useCallback((token: string) => {
        const userData: Partial<User> = {
            token: token,
        };
        setUserData(userData)
    }, []);

    const logout: () => void = useCallback(() => {
        setUser(null);
    }, []);

    const setUserData: (userData: Partial<User>) => void = useCallback((userData: Partial<User>): void => {
        setUser((prev: User | null): User | null => {
            if (!prev) {
                return userData as User;
            }
            return { ...prev, ...userData };
        });
    }, []);


    const isAuthenticated: boolean = !!user?.token;

    const contextValue: IUserContext = {
        isAuthenticated,
        login,
        logout,
        setUserData,
        user,
    };

    return (
        <UserContext value={contextValue}>
            {children}
        </UserContext>
    );
};
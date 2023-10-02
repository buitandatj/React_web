import React, { createContext, useEffect, useState } from 'react';
import { IUsers } from '../type/IUsers';
import { instanceUser } from '../api/ApiUser';
interface IUser {
    userData: IUsers[];
    setUserData: React.Dispatch<React.SetStateAction<IUsers[]>>;
    isLoggedIn: boolean;
    currentUser: IUsers | null;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentUser: React.Dispatch<React.SetStateAction<IUsers | null>>;
}

export const userContext = createContext<IUser>({
    userData: [],
    setUserData: () => { },
    isLoggedIn: false,
    currentUser: null,
    setIsLoggedIn: () => { },
    setCurrentUser: () => { },
})
type ChildrenProps = { children: JSX.Element };

export const UserProvider = ({ children }: ChildrenProps) => {
    const [userData, setUserData] = useState<IUsers[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IUsers | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await instanceUser.get('users')
                const users = res.data
                setUserData(users)
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    }, [])
    return (
        <userContext.Provider value={{ userData, setUserData, isLoggedIn, currentUser, setIsLoggedIn, setCurrentUser }}>
            {children}
        </userContext.Provider>
    )
}   

import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { IUsers } from '../type/IUsers';


interface IUser {
    userData: IUsers[],
    setUserData: any;
    setIsLoggedIn: any;
    isLoggedIn: boolean
}

export const userContext = createContext<IUser>({
    userData: [],
    setUserData: () => { },
    setIsLoggedIn: () => { },
    isLoggedIn: false
})
type ChildrenProps = { children: JSX.Element };

export const UserProvider = ({ children }: ChildrenProps) => {
    const [userData, setUserData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('http://localhost:3002/users')
                const users = res.data
                setUserData(users)
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser()
    }, [])

    return (
        <userContext.Provider value={{ userData, setUserData, isLoggedIn, setIsLoggedIn }}>
            {children}
        </userContext.Provider>
    )
}   

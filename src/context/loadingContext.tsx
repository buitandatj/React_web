import React, { createContext, useState } from 'react';
export interface LoadingContextType {
    loading: boolean;
    setLoading: (value: boolean) => void;
}
type ChildrenProps = { children: JSX.Element };
export const loadingContext = createContext<LoadingContextType>({ loading: false, setLoading: (value: boolean) => { } })

export const LoadingProvider = ({ children }: ChildrenProps) => {
    const [loading, setLoading] = useState<boolean>(false)

    return (
        <loadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </loadingContext.Provider>
    )
}   

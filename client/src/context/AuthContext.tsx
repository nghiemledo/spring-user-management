/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/context/AuthContext.tsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
    user: null as string | null,
    login: (_token: string) => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(localStorage.getItem("token"));

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setUser(token);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        setUser(token);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

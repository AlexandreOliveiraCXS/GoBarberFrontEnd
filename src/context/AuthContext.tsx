import React, { createContext, useCallback  } from 'react';
import api from '../services/api';

interface SignInCredentials{
    email: string,
    password: string,
}

interface AuthContextData {
    name: string;
    singIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({children}) => {
    const singIn = useCallback(async ({ email, password}) => {
        const response = await api.post('sessions', { email, password});

        console.log(response.data);
    },[]);
    
    return (
        <AuthContext.Provider value={ {name: ' Alexandre', singIn} }>
            {children}
        </AuthContext.Provider>
    );
}; 
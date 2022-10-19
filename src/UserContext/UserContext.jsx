import React, { createContext } from 'react';

export const AuthContext = createContext()

const UserContext = ({children}) => {
    const user = {displayName: 'Tahdi Islam'}
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;
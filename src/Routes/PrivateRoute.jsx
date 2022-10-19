import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    //
    if(loading){
        return <div className='flex justify-center items-center'>
            <div className="w-10 h-10 my-8 border-4 border-dotted rounded-full animate-spin border-purple-600"></div>
        </div>
    }
    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace/>
};

export default PrivateRoute;
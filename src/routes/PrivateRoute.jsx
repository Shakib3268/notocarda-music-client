import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading)
    {
        return <h1>Loading ... </h1>
    }
    if(user)
    {
        return children;
    }
   
       return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
  
};


export default PrivateRoute; 
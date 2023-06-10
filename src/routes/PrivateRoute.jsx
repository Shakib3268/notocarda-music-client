import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="spinner-blue text-center">
            <button className="btn loading">loading</button>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to= '/login'></Navigate>
};


export default PrivateRoute;
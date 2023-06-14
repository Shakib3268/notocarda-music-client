import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import UseAuth from '../hooks/UseAuth';

const AdminRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const [isAdmin,isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading){
        return <div className="spinner-blue text-center">
        <button className="btn loading">loading</button>
    </div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate state={{from:location}} to= '/'></Navigate>
};

export default AdminRoute;
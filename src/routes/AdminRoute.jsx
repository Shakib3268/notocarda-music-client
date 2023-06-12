import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
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
    return <Navigate state={{from:location}} to= '/login'></Navigate>
};

export default AdminRoute;
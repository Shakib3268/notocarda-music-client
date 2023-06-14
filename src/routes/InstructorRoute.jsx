import React, { useContext } from 'react';
import useInstructor from '../hooks/useInstructor';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const InstructorRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isInstructor,isInstructorLoading] = useInstructor()
    const location = useLocation()
    if(loading || isInstructorLoading){
        return <div className="spinner-blue text-center">
            <button className="btn loading">loading</button>
        </div>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate state={{from:location}} to= '/'></Navigate>
};

export default InstructorRoute;
import React, { useContext } from 'react';
import useStudent from '../hooks/useStudent';
import { Navigate, useLocation } from 'react-router-dom';

const StudentPrivate = ({children}) => {
    const [isStudent,isStudentLoading] = useStudent();
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if(loading && isStudentLoading)
    {
        return <h1>Loading ... </h1>
    }
    if(user && isStudent)
    {
        return children;
    }
   
       return <Navigate to="/login" replace={true} state={{from:location}}></Navigate>
    
  
};

export default StudentPrivate;
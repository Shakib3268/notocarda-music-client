import React from 'react';
import UseAxiosSecure from './UseAxiosSecure';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const {user, loading} = UseAuth();
    const [axiosSecure] = UseAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructorn', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;
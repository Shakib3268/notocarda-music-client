import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseSelected = () => {
    const { user, loading } = UseAuth()
    const [axiosSecure] = UseAxiosSecure();
    const { refetch, data: selectclass = [] } = useQuery({
        queryKey: ['selectclass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/selectclass?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [selectclass, refetch]
};

export default UseSelected;
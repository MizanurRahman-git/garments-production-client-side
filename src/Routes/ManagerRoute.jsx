import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';
import { useNavigate } from 'react-router';

const ManagerRoute = ({children}) => {
    const {loading} = useAuth()
    const [role, isLoading]= useRole()
    const navigate = useNavigate()

    if( loading || isLoading ) {
        return <div className='flex justify-center items-center min-h-screen'><span className="loading loading-dots loading-2xl"></span></div>
    }

    if( role !== 'Manager') {
        return navigate('/')
    }
    return children;
};

export default ManagerRoute;
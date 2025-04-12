import { LoginForm } from '@/components/login-form';
import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className='flex h-screen items-center justify-center bg-gray-100'>
            <LoginForm />
        </div>
    )
};

export default LoginPage;
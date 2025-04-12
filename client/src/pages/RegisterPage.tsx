import { RegisterForm } from '@/components/register-form';
import React from 'react';

const RegisterPage: React.FC = () => {
    return (
        <div className='flex h-screen items-center justify-center bg-gray-100'>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
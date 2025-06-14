import React, { useState } from 'react'
import { Button, Input, PasswordInput, Toaster } from "./"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from '../formValidations';
import { apiRequest } from '../utils/apiRequest';

const Register = () => {
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [serverValidationErrors, setServerValidationErrors] = useState({});

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const registerHandler = async (data) => {
        setError("");
        setServerValidationErrors({});
        
        try {
            const res = await apiRequest({
                url: "/auth/register",
                method: "POST",
                data: data
            })
            
            if(res.statusCode == 400) {
                setError(res.message);
                setServerValidationErrors(res.errors);
            }

            if(res.statusCode == 201) {
                //do something
                setSuccessMessage(res.message);
            }
        } catch (error) {            
            setError(error.message);            
        }
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 mx-auto">

            {error && <Toaster success={false} message={error}/>  }

            {successMessage && <Toaster success={true} message={successMessage}/> }

            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Create an Account
            </h2>

            <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">
                {/* name */}
                <Input
                    label="Name"
                    {...register("name")}
                    validationError={serverValidationErrors?.name || errors.name?.message}
                />

                {/* email */}
                <Input
                    label="Email"
                    {...register("email")}
                    validationError={serverValidationErrors?.email || errors.email?.message}
                />

                {/* password */}
                <PasswordInput
                    label="Password"
                    {...register("password")}
                    validationError={serverValidationErrors?.password || errors.password?.message}
                />

                {/* confirm password */}
                <PasswordInput
                    label="Confirm Password"
                    {...register("confirmPassword")}
                    validationError={errors.confirmPassword?.message}
                />

                <Button
                    label="Register"
                />

                {/* Already have an account? */}
                <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
                    Already have an account? 
                    <Link
                        to="/login"
                        className='text-blue-600 dark:text-blue-400 hover:underline'
                    >
                    &nbsp; Log in
                    </Link>
                </p>

            </form>
        </div>
    )
}

export default Register
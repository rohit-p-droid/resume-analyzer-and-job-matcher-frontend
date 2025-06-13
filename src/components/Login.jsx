import React, { useState } from 'react';
import { loginSchema } from '../formValidations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, Button, Toaster, PasswordInput } from './';
import { Link } from 'react-router-dom';
import { apiRequest } from '../utils/apiRequest';

const Login = () => {

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [serverValidationErrors, setServerValidationErrors] = useState({});

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const loginHandler = async (data) => {
    setError("");
    setServerValidationErrors({});

    try {
      const res = await apiRequest({
        url: "/auth/login",
        method: "POST",
        data: data
      })

      if (res.statusCode == 400) {
        setServerValidationErrors(res.errors);
      }

      if (res.statusCode == 200) {
        setSuccessMessage(res.message);
      }

    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl w-full max-w-md p-8 mx-auto">

      {error && <Toaster success={false} message={error} />}

      {successMessage && <Toaster success={true} message={successMessage} />}

      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit(loginHandler)} className='space-y-5'>
        <Input
          label="Email"
          {...register("email")}
          validationError={serverValidationErrors?.email || errors.email?.message}
        />

        <PasswordInput
          label="Password"
          {...register("password")}
          validationError={serverValidationErrors?.password || errors.password?.message}
        />

        <Button label="Login" />

        <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
          New here?
          <Link
            to="/register"
            className='text-blue-600 dark:text-blue-400 hover:underline'
          >
            &nbsp; Register
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
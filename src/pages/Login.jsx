import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data) => {
    dispatch(login({ email: data.email }));
    navigate('/');
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-stone-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              {...register('email')}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-stone-600 bg-gray-100 dark:bg-stone-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-coffee-600"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password with show/hide */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                {...register('password')}
                className="w-full rounded-md border border-gray-300 dark:border-stone-600 bg-gray-100 dark:bg-stone-700 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-coffee-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400 hover:text-coffee-600"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-coffee-600 hover:bg-coffee-700 text-white rounded-md font-medium transition-colors"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-coffee-600 hover:underline">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}

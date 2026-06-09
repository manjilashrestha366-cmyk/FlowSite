// src/pages/Signup.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';

// Zod schema for signup
const signupSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Passwords do not match',
});

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = (data) => {
    dispatch(login({ email: data.email }));
    navigate('/');
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-stone-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Sign Up</h2>
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
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register('password')}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-stone-600 bg-gray-100 dark:bg-stone-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-coffee-600"
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              {...register('confirmPassword')}
              className="mt-1 w-full rounded-md border border-gray-300 dark:border-stone-600 bg-gray-100 dark:bg-stone-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-coffee-600"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-coffee-600 hover:bg-coffee-700 text-white rounded-md font-medium transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-coffee-600 hover:underline">Login</Link>
        </p>
      </div>
    </section>
  );
}

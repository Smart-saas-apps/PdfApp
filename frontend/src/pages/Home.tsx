import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to BaseApp
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern web application template with authentication and user management
        </p>
        
        {!isAuthenticated && (
          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Secure Authentication
          </h2>
          <p className="text-gray-600">
            Built-in user authentication with JWT tokens and secure password hashing
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Modern Stack
          </h2>
          <p className="text-gray-600">
            Built with React, TypeScript, Tailwind CSS, and Express.js
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            User Management
          </h2>
          <p className="text-gray-600">
            Complete user management system with roles and permissions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

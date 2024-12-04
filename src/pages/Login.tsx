import React from 'react';



import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const Login= () => {

  return (
    <div className="w-full min-h-screen bg-white text-black py-10 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Login to Your Account</h1>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <LoginForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-black hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

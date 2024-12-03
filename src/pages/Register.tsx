import React from 'react';
import RegistrationForm from '../components/RegistrationForm';



const Register = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black py-10 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <RegistrationForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-teal-500 hover:underline">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from 'react';

import { Button } from '@material-tailwind/react';
import InputField from '../InputField';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import * as Yup from 'yup';

type errorType = { 
  email?: string,
  password?: string,
 
 };
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<errorType>({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const { login, isAuthenticated } = useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
 

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const loginUser = login(formData.email, formData.password);
    if(!loginUser) {
      toastr.error('Login failed! Please check your credentials', '', {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "showDuration": 300,
        "hideDuration": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      });
      return;
    }

    if (loginUser) {
      toastr.success('Login successful!', '', {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "showDuration": 300,
        "hideDuration": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      });
      
      return;
    }
    } catch (error: any) {
      const newErrors: any = {};
      error.inner.forEach((err: any) => {
        newErrors[err.path] = err.message;
      })
      setErrors(newErrors);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);
 

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <div className="flex justify-end mt-6 w-full">
        <Button {...({} as any)} type="submit" color="black" size="lg" className="px-12 py-3 rounded-none w-full text-white">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;

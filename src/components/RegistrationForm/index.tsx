import React, { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import InputField from '../InputField';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import * as Yup from 'yup';

type errorType = { 
  fullName?: string,
  email?: string,
  password?: string,
  confirmPassword?: string,
  phone?: string
 };

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState<errorType>({});

  // Validation schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email'),
    password: Yup.string().required('Password is required')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long and contain at least one letter and one number'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm password is required'),
    phone: Yup.string().required('Phone number is required')
      .matches(/^[0-9]{10}$/, 'Invalid phone number'),
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      const user = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password, 
      };
      console.log(user);

      // Save user data to local storage
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      existingUsers.push(user);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      setIsSuccess(true);

      
      setTimeout(() => {
        navigate('/login');
      }, 2000); 
    
    } catch (error: any) {
      //console.error(error);
      console.log(formData);
      const newErrors: any = {};
      error.inner.forEach((err: any) => {
        newErrors[err.path] = err.message;
      })
      setErrors(newErrors);
    }

    
      
      
  };
  useEffect(() => {
    if (isSuccess) {
      const showSuccessToast = () => {
        toastr.success('Registration successful! Redirecting to login...','', {
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
      };
      showSuccessToast();
    }
  }, [isSuccess]);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <InputField
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}   
          error={errors.fullName }      
          />

        {/* Email Address */}
        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}       
          />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}         />

        {/* Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}   
          error={errors.password}     
          />

        {/* Confirm Password */}
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange} 
          error={errors.confirmPassword}      
           />

        

        {/* Submit Button */}
        <div className="flex justify-end mt-6 w-full">
          <Button {...({} as any)} type="submit" color="black" size="lg" className="px-12 py-3 text-white rounded-none w-full">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
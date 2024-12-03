import React, { useState } from 'react';

import { Button } from '@material-tailwind/react';
import InputField from '../InputField';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login submission logic here (e.g., API call)
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Email Address"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="flex justify-end mt-6">
        <Button {...({} as any)} type="submit" color="teal" size="lg" className="px-12 py-3 text-white">
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;

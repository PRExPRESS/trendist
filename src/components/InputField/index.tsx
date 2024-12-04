import React from 'react';
import { Input } from '@material-tailwind/react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange  , error }) => {
  return (
    <div>
      <Input {...({} as any)}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full ${error ? 'border-red-500 ' : ''}`}
      />
      {
        error && <p className="text-red-500 text-sm">{error}</p>
      }
    </div>
  );
};

export default InputField;
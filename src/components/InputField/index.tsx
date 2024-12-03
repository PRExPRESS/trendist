import React from 'react';
import { Input } from '@material-tailwind/react';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <Input {...({} as any)}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full"
      />
    </div>
  );
};

export default InputField;

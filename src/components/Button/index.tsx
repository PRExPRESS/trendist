import React from 'react';
import { Button } from '@material-tailwind/react';

interface ButtonProps {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <Button {...({} as any)}
      type={type}
      color="teal"
      size="lg"
      className="w-full py-3 text-white"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

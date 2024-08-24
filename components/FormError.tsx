import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

interface formErrorProps {
  message: string;
}

const FormError = ({ message }: formErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex flex-center items-center bg-destructive/15 rounded-md gap-x-2 text-sm text-destructive p-3">
      <FaTriangleExclamation className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;

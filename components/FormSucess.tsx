import React from "react";
import { FaCheck } from "react-icons/fa6";

interface formErrorProps {
  message: string;
}

const FormSucess = ({ message }: formErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex flex-center items-center bg-emerald-500/15 rounded-md gap-x-2 text-sm text-emerald-500 p-3">
      <FaCheck className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSucess;

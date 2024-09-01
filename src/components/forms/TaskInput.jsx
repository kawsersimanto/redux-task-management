import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const TaskInput = ({
  name,
  required = false,
  disabled = false,
  label,
  type = "text",
  defaultValue,
  className = "",
  labelTextColor = "text-black",
  ...props
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="w-full">
          {label && (
            <label
              htmlFor={name}
              className={`${labelTextColor} block mb-2 text-lg w-full`}
            >
              {label}
            </label>
          )}
          <input
            {...field}
            {...props}
            id={name}
            disabled={disabled}
            required={required}
            type={type}
            className={`border border-gray-300 w-full flex rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error ? "border-red-500" : ""
            } ${className}`}
          />
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default TaskInput;

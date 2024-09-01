import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const TaskTextarea = ({
  name,
  required = false,
  disabled = false,
  label,
  defaultValue,
  className = "",
  labelTextColor = "text-black",
  rows = 4,
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
          <textarea
            {...field}
            {...props}
            id={name}
            disabled={disabled}
            required={required}
            rows={rows}
            className={`border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
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

export default TaskTextarea;

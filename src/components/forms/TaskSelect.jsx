import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const TaskSelect = ({
  name,
  required = false,
  disabled = false,
  label,
  defaultValue,
  className = "",
  labelTextColor = "text-black",
  options = [],
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
          <select
            {...field}
            {...props}
            id={name}
            disabled={disabled}
            required={required}
            className={`border border-gray-300 w-full rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              error ? "border-red-500" : ""
            } ${className}`}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default TaskSelect;

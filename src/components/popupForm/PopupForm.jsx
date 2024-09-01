// PopupForm.js
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TaskInput from "../components/forms/TaskInput";
import TaskTextarea from "../components/forms/TaskTextarea";
import TaskSelect from "../components/forms/TaskSelect";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z
    .string()
    .min(1, "Date is required")
    .refine((val) => !isNaN(new Date(val).getTime()), {
      message: "Invalid date",
    }),
  assignTo: z.enum(["Jane", "John", "Doe"], {
    errorMap: () => ({ message: "Invalid selection for Assign To" }),
  }),
  priority: z.enum(["High", "Medium", "Low"], {
    errorMap: () => ({ message: "Invalid selection for Priority" }),
  }),
});

const PopupForm = ({ isOpen, handleClosePopup }) => {
  const handleSubmit = (data) => {
    console.log(data);
    handleClosePopup(); // Close popup on form submission
  };

  if (!isOpen) return null; // Return null if popup is not open

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="p-10 shadow-lg w-[700px] bg-white rounded-2xl relative">
        <button
          onClick={handleClosePopup}
          className="absolute top-4 right-4 text-gray-500"
        >
          &times; {/* Close button */}
        </button>
        <TaskForm resolver={zodResolver(taskSchema)} onSubmit={handleSubmit}>
          <TaskInput label="Title" name="title" type="text" />
          <TaskTextarea label="Description" name="description" />
          <TaskInput label="Date" name="date" type="date" />
          <TaskSelect
            label="Assign to"
            name="assignTo"
            options={[
              { value: "Jane", label: "Jane" },
              { value: "John", label: "John" },
              { value: "Doe", label: "Doe" },
            ]}
          />
          <TaskSelect
            label="Priority"
            name="priority"
            options={[
              { value: "Medium", label: "Medium" },
              { value: "High", label: "High" },
              { value: "Low", label: "Low" },
            ]}
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
          >
            Submit
          </button>
        </TaskForm>
      </div>
    </div>
  );
};

export default PopupForm;

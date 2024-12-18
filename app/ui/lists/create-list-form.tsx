"use client";

import { useState } from "react";
import { z } from "zod";
import { createList } from "@/app/lib/listsActions";

interface ListFormProps {
  onClose: () => void;
}

const CreateListSchema = z.string().min(1, "Name is required.");

export default function CreateListForm({ onClose }: ListFormProps) {
  const [listName, setListName] = useState("");
  const [error, setError] = useState("");
  const userId = "7ec26f8a-bc9a-4ec2-a997-53180839555e";

  function handleChanges(e: any) {
    setListName(e.target.value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const validatedFields = CreateListSchema.safeParse(listName);
    console.log(listName);
    console.log(validatedFields);

    if (!validatedFields.success) {
      setError("List name is incorrect");
      return;
    }

    try {
      await createList(userId, validatedFields.data);
      onClose(); // Close the modal on success
    } catch (error) {
      console.error("Error creating list:", error);
      setError("Error creating list. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h3 className="text-center font-medium">New List</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="px-4 pt-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <input
              className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 md:text-lg"
              type="text"
              placeholder="Enter list name"
              required
              value={listName}
              onChange={handleChanges}
            />
          </div>
        </div>
        {error && <p className="px-4 py-2 text-sm text-red-500">{error}</p>}
        <div className="mx-4 my-4 sm:mx-0 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className="mb-4 inline-flex w-full justify-center rounded-md border border-transparent bg-btn-color px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-200 hover:bg-btn-color-hover focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:text-sm md:text-lg"
          >
            Submit
          </button>
          <button
            type="button"
            className="mb-4 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 sm:text-sm md:text-lg"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

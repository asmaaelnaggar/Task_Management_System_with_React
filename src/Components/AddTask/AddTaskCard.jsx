import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ThemeContext } from "../../Context/ThemeContext";

const AddTaskCard = ({ isOpenModel, setIsOpenModel }) => {
  const [links, setLinks] = useState([]);
  const [currentLink, setCurrentLink] = useState("");
  const [linkError, setLinkError] = useState("");
  const { theme } = useContext(ThemeContext);

  const linkSchema = z
    .string()
    .url("Please enter a valid URL")
    .max(200, "Maximum 200 letters!");

  const addtaskschema = z.object({
    addtask: z.string().min(6, "Minimum 3 letters!").max(20, "Maximum 20 letters!"),
    description: z.string().max(200, "Maximum 200 letters!"),
    startdate: z.coerce.date().min(new Date(), "Start date must be now or later"),
    enddate: z.coerce.date().min(new Date(), "End date must be now or later"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addtaskschema),
  });

  const onSubmit = (data) => {
    const newTask = {
      ...data,
      attachments: links,
      completed: "todo",
      createdAt: new Date().toISOString(),
    };

    // 1) Load currentUser
    const currentUserRaw = localStorage.getItem("currentUser");
    if (!currentUserRaw) {
      alert("You must be logged in to add tasks.");
      return;
    }
    const currentUser = JSON.parse(currentUserRaw);

    // 2) Update the users array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((u) =>
      u.email === currentUser.email
        ? { ...u, tasks: [...(u.tasks || []), newTask] }
        : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // 3) Update the currentUser entry
    const updatedCurrentUser = {
      ...currentUser,
      tasks: [...(currentUser.tasks || []), newTask],
    };
    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));

    // 4) Notify any listeners
    window.dispatchEvent(new Event("tasksUpdated"));

    alert("Task added successfully!");
    setIsOpenModel(false);
  };

  const handleAddLink = () => {
    const link = currentLink.trim();
    if (!link) {
      setLinkError("Please enter a link!");
      return;
    }
    const result = linkSchema.safeParse(link);
    if (!result.success) {
      setLinkError(result.error.format()._errors[0]);
      return;
    }
    setLinks((prev) => [...prev, link]);
    setCurrentLink("");
    setLinkError("");
  };

  const handleRemoveLink = (idx) => {
    setLinks((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-3 w-150 p-4 rounded-2xl shadow-lg mx-auto ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <input
        placeholder="Task Name"
        {...register("addtask")}
        className="p-2 bg-slate-200 rounded-lg text-sm"
      />
      {errors.addtask && (
        <p className="text-red-600 text-xs">{errors.addtask.message}</p>
      )}

      <textarea
        placeholder="Description..."
        {...register("description")}
        className="p-2 bg-slate-200 rounded-lg text-sm resize-none h-20"
      />
      {errors.description && (
        <p className="text-red-600 text-xs">{errors.description.message}</p>
      )}

      <div className="flex flex-col">
        <label className="text-gray-500 text-xs mb-1">Start Date</label>
        <input
          type="date"
          {...register("startdate")}
          className="p-2 bg-slate-200 rounded-lg text-xs"
        />
        {errors.startdate && (
          <p className="text-red-600 text-xs">{errors.startdate.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-500 text-xs mb-1">End Date</label>
        <input
          type="date"
          {...register("enddate")}
          className="p-2 bg-slate-200 rounded-lg text-xs"
        />
        {errors.enddate && (
          <p className="text-red-600 text-xs">{errors.enddate.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-gray-500 text-xs mb-1">
          Attachments (Links)
        </label>
        <div className="flex gap-2">
          <input
            type="url"
            value={currentLink}
            onChange={(e) => setCurrentLink(e.target.value)}
            placeholder="Enter link URL"
            className="p-2 bg-slate-200 rounded-lg text-xs flex-1"
          />
          <button
            type="button"
            onClick={handleAddLink}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-xs"
          >
            Add
          </button>
        </div>
        {linkError && <p className="text-red-600 text-xs mt-1">{linkError}</p>}

        {links.length > 0 && (
          <div className="mt-2 p-2 bg-slate-100 rounded-lg">
            <p className="text-gray-500 text-xs mb-1">Added Links:</p>
            <ul className="space-y-1">
              {links.map((link, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center"
                >
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs truncate hover:underline mr-2"
                  >
                    {link}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleRemoveLink(i)}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-1 self-center mt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs"
        >
          {isSubmitting ? "Adding..." : "Add"}
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs"
          onClick={() => setIsOpenModel(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTaskCard;

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddTaskForm = () => {
  const addtaskschema = z.object({
    addtask: z
      .string()
      .min(6, "The minimum letters is 6 !")
      .max(20, "The maximum letters is 20 !"),

    description: z.string().max(200, "The maximum letters is 200 !"),

    startdate: z.coerce
      .date()
      .min(new Date(), "Start date must be at moment or future date"),

    enddate: z.coerce
      .date()
      .min(new Date(), "End date must be at moment or future date"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(addtaskschema),
  });

  const onSubmit = () => {
    try {
      console.log("Form Is Submitted");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-3xl p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl mt-2"
    >
      <label htmlFor="add"></label>
      <input
        id="add"
        placeholder="Task name"
        className="w-full mb-6 p-3 bg-slate-300 dark:bg-slate-600 dark:text-white rounded-lg border-none text-center text-xl"
        type="text"
        {...register("addtask")}
      />
      {errors.addtask && (
        // <p className="text-red-600">{errors.addtask.message}</p>
        <p className="text-red-600 dark:text-red-400">{errors.addtask.message}</p>

      )}

      <label htmlFor="descibe" className="font-bold text-gray-800 dark:text-gray-200 text-lg"
      >
        Description
      </label>
      <input
        id="describe"
        type="text"
        {...register("description")}
        placeholder="Write something..."
        // className="p-3 bg-slate-300 rounded-lg border-none w-full  mb-6 h-24"
        className="w-full mb-6 p-3 bg-slate-300 dark:bg-slate-600 dark:text-white rounded-lg border-none  text-xl h-24"

      />
      {errors.description && (
        // <p className="text-red-600">{errors.description.message}</p>
        <p className="text-red-600 dark:text-red-400">{errors.description.message}</p>

      )}

      <div className="mb-6">
        <label className="font-bold text-gray-800 dark:text-gray-200 text-lg"
        >Attachments</label>
        <input type="file" className="w-full text-gray-800 dark:text-gray-200 " />
      </div>

      <div className="flex flex-col md:flex-row gap-5 w-full flex-1 mb-6">
        <div className="flex flex-col flex-1">
          <label htmlFor="start" className="font-bold text-gray-800 dark:text-gray-200 text-lg"
          >
            StarT Date{" "}
          </label>
          <input
            id="start"
            type="date"
            {...register("startdate")}
            className="p-3 bg-slate-300 rounded-lg border-b-2"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="end" className="font-bold text-gray-800 dark:text-gray-200 text-lg"
          >
            End Date{" "}
          </label>
          <input
            id="end"
            type="date"
            {...register("enddate")}
            className="p-3 bg-slate-300 rounded-lg border-b-2"
          />
        </div>
      </div>
      {errors.startdate && (
        // <p className="text-red-600">{errors.startdate.message}</p>
        <p className="text-red-600 dark:text-red-400">{errors.startdate.message}</p>

      )}
      {errors.enddate && (
        // <p className="text-red-600">{errors.enddate.message}</p>
        <p className="text-red-600 dark:text-red-400">{errors.enddate.message}</p>

      )}

      <div className="flex flex-row gap-4 self-center mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-slate-50 font-bold cursor-pointer"
        >
          {isSubmitting ? "adding task" : "Add Task"}
        </button>
        <button
          type="reset"
          className="px-4 py-3 rounded-lg bg-red-500 hover:bg-red-800 text-slate-50 font-bold cursor-pointer"
        >
          Cancel
        </button>
      </div>

      <div className="w-full text-center text-gray-500 mt-6">
        &copy; Interest-based ADS | Don’t steel my INFO
      </div>
    
       {/* <figure>
        <img src="../assets/icons/github.svg" alt="" />
       </figure> */}
    </form>
  );
};

export default AddTaskForm;

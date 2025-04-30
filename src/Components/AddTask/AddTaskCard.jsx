import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddTaskCard = ({ isOpenModel, setIsOpenModel }) => {
    const addtaskschema = z.object({
        addtask: z.string().min(6, "Minimum 6 letters!").max(20, "Maximum 20 letters!"),
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

    const onSubmit = () => {
        console.log("Form submitted");
    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3 w-150 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg mx-auto"
        >
            <input
                id="add"
                placeholder="Task Name"
                {...register("addtask")}
                className="p-2 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg text-sm"
            />
            {errors.addtask && (
                <p className="text-red-600 dark:text-red-400 text-xs">{errors.addtask.message}</p>
            )}

            <textarea
                id="description"
                {...register("description")}
                placeholder="Description..."
                className="p-2 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg text-sm resize-none h-20"
            />
            {errors.description && (
                <p className="text-red-600 dark:text-red-400 text-xs">{errors.description.message}</p>
            )}

            <div className="flex flex-col">
                <label className="text-gray-600 dark:text-gray-300 text-xs mb-1">Start Date</label>
                <input
                    type="date"
                    {...register("startdate")}
                    className="p-2 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg text-xs"
                />
                {errors.startdate && (
                    <p className="text-red-600 dark:text-red-400 text-xs">{errors.startdate.message}</p>
                )}
            </div>

            <div className="flex flex-col">
                <label className="text-gray-600 dark:text-gray-300 text-xs mb-1">End Date</label>
                <input
                    type="date"
                    {...register("enddate")}
                    className="p-2 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-lg text-xs"
                />
                {errors.enddate && (
                    <p className="text-red-600 dark:text-red-400 text-xs">{errors.enddate.message}</p>
                )}
            </div>

            <div className="flex justify-between mt-2">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-xs"
                >
                    {isSubmitting ? "Adding..." : "Add"}
                </button>
                <button
                    type="reset"
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-xs"
                    onClick={() => setIsOpenModel(false)}>
                    Cancel

                </button>
            </div>
        </form>
    );
};

export default AddTaskCard;
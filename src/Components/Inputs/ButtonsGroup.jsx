import React from "react";

const ButtonsGroup = () => {
    return (
    <div className="w-full flex justify-end pr-20 mt-6">
        <div className="flex gap-4">
        <button
            type="button"
            className="bg-[#ECECEC] rounded-lg px-5 py-2 text-[#343434] font-semibold"
        >
            Cancel
        </button>
        <button
            type="submit"
            className="bg-[#5643F8] rounded-lg px-8 py-2 text-white font-semibold"
        >
            Save
        </button>
        </div>
    </div>
    );
};

export default ButtonsGroup;

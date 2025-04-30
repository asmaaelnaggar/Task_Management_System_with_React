import React from "react";
const ButtonsGroup = ({ onSave, onCancel, isSaving, isCanceled }) => {
return (
    <div className="xs:w-[250px] flex pr-20 mt-6">
        <div className="flex gap-4 ml-[10px]">
            <button
            type="button"
            className="bg-[#ECECEC] rounded-lg px-5 py-2 text-[#343434] font-semibold"
            onClick={onCancel}
            disabled={isSaving}
            >
            {isCanceled ? "Canceled" : "Cancel"}
        </button>
        <button
            type="button"
            className="bg-[#246083] rounded-lg px-8 py-2 text-white font-semibold"
            onClick={onSave}
            disabled={isSaving}
        >
        {isSaving ? "Saving..." : "Save"}
        </button>
        </div>
    </div>
);
};

export default ButtonsGroup;
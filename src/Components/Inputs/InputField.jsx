import React from "react";

const InputField = ({ label, value, icon: Icon, readOnly = true, type = "text" }) => {
    return (
    <div className="flex flex-col flex-1 min-w-[220px]">
        <label className="mb-1 text-[#343434] font-bold">{label}</label>
        <div className="relative">
        {Icon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
            <Icon />
            </span>
        )}
        <input
            type={type}
            value={value}
            readOnly={readOnly}
            className={`border border-[#E5E7EB] rounded-md py-2 w-full ${
            Icon ? "pl-10 pr-4" : "px-4"
            }`}
        />
        </div>
    </div>
    );
};

export default InputField;

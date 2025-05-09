import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const InputField = ({
  label,
  value,
  onChange, 
  icon: Icon,
  type = "text",
  readOnly = false, 
}) => {
    const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col flex-1 min-w-[220px]">
      <label className={theme === "light"? "mb-1 text-black font-bold":"mb-1 text-white font-bold"}>{label}</label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
            <Icon />
          </span>
        )}
        <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={`border border-[#E5E7EB] rounded-md py-2 w-full ${
          Icon ? "pl-10 pr-4" : "px-4"
        } ${theme === "light" ? "text-black" : "text-white"} bg-transparent`}
      />
      </div>
    </div>
  );
};

export default InputField;

import React from "react";
import InputField from "./InputField";
import { FiMail } from "react-icons/fi";

const SettingsForm = () => {
    return (
    <form className="w-full max-w-4xl px-3 mt-10">
        <div className="flex flex-wrap gap-x-10 gap-y-5">
        <InputField label="First name" value="Killan" />
        <InputField label="Last name" value="James" />
        </div>

        <div className="mt-5 max-w-md">
        <InputField label="Email" value="killanjames@gmail.com" icon={FiMail} />
        </div>

        <div className="mt-5 max-w-md">
        <InputField label="Role" value="Product Designer" />
        </div>
    </form>
    );
};

export default SettingsForm;

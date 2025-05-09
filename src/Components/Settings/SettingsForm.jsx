import React, {  useState } from "react";
import InputField from "../Inputs/InputField";
import { FiMail } from "react-icons/fi";
import ButtonsGroup from "../Buttons/ButtonsGroup"; 


const SettingsForm = () => {
    
    // will be catch from json file this is only for test
const initialData = {
    firstName: "Killan",
    lastName: "James",
    email: "killanjames@gmail.com",
    role: "Product Designer",
};

const [formData, setFormData] = useState(initialData);
const [savedData, setSavedData] = useState(initialData);
const [isSaving, setIsSaving] = useState(false);
const [isCanceled, setIsCanceled] = useState(false);

const handleChange = (field) => (e) => {
setFormData({ ...formData, [field]: e.target.value });
};

const handleSave = () => {
setIsSaving(true);
setIsCanceled(false);

setTimeout(() => {
    if (window.confirm("Are you sure you want to save your new data?")) {
    setSavedData(formData); 
    alert("Data has been Saved successfully!");
    } else {
    setFormData(savedData); 
    }
    setIsSaving(false);
}, 2000);
};

const handleCancel = () => {
if (window.confirm("Are you sure you want to cancel update for your data?")) {
    setFormData(savedData); 
    setIsCanceled(true);
    alert("Data has been Canceled successfully!");
}
};

return (
<form className="px-3 mt-10 pb-[20px] xs:w-[250px] sm:w-full">
    <div className="flex flex-wrap gap-x-10 gap-y-5 sm:w-full">
        <InputField
            label="First name"
            value={formData.firstName}
            onChange={handleChange("firstName")}
            className="xs:w-[200px] sm:w-full"
        />
        <InputField
            label="Last name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
            className="xs:w-[200px] sm:w-full"
        />
    </div>

    <div className="mt-5 md:w-full">
        <InputField
            label="Email"
            value={formData.email}
            onChange={handleChange("email")}
            icon={FiMail}
            className="xs:w-[200px] sm:w-full"
        />
    </div>

    <div className="mt-5 sm:w-full">
        <InputField
            label="Role"
            value={formData.role}
            onChange={handleChange("role")}
            className="xs:w-[200px] sm:w-full"
        />
    </div>

    <ButtonsGroup
    onSave={handleSave}
    onCancel={handleCancel}
    isSaving={isSaving}
    isCanceled={isCanceled}
    />
</form>
);
};

export default SettingsForm;
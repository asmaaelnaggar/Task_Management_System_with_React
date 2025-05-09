import React, { useState, useEffect } from "react";
import InputField from "../Inputs/InputField";
import { FiMail } from "react-icons/fi";
import ButtonsGroup from "../Buttons/ButtonsGroup";

const SettingsForm = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [savedData, setSavedData] = useState(initialData);
  const [isSaving, setIsSaving] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);

  useEffect(() => {
    // Load currentUser from localStorage
    const raw = localStorage.getItem("currentUser");
    if (!raw) return;
    let user;
    try {
      user = JSON.parse(raw);
    } catch {
      user = { email: raw };
    }
    const loaded = {
      firstName: user.firstName || "",
      lastName:  user.lastName  || "",
      email:     user.email     || "",
      role:      user.role      || "",
    };
    setFormData(loaded);
    setSavedData(loaded);
  }, []);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    setIsSaving(true);
    setIsCanceled(false);

    setTimeout(() => {
      if (!window.confirm("Are you sure you want to save your new data?")) {
        setFormData(savedData);
        setIsSaving(false);
        return;
      }

      // Update currentUser
      const updatedUser = { ...savedData, ...formData };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));

      // Update users array
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map(u =>
        u.email === savedData.email
          ? { ...u, ...formData }
          : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setSavedData(formData);
      alert("Data has been saved successfully!");
      setIsSaving(false);
    }, 2000);
  };

  const handleCancel = () => {
    if (!window.confirm("Are you sure you want to cancel changes?")) return;
    setFormData(savedData);
    setIsCanceled(true);
    alert("Changes have been canceled!");
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
 
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import InputField from "../Inputs/InputField";
export default function AccountComponent() {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const handleDelete = () => {
        if (
            window.confirm("Are you sure you want to delete your account? This action cannot be undone.")
        ) {
            alert("Account deleted successfully!");
            navigate("/Login"); // when we connect with logout it will go to logout
        }
    };

    return (
        <div className={theme === "light" ? "bg-[#F3F4F8] flex-1 p-8" : "bg-black flex-1 p-8"}>
            <h2 className={theme === "light" ? "text-black text-2xl font-bold mb-6" : "text-white text-2xl font-bold mb-6"}>Settings</h2>
            <div className={theme === "light" ? "bg-[#F3F4F8] p-6 rounded-2xl shadow" : "bg-black p-6 rounded-2xl shadow"}>
                <div className="mb-6">
                    <h3 className={theme === "dark" ? "text-xl font-semibold mb-4 text-white" : "text-black text-xl font-semibold mb-4"}>Account Information</h3>
                    {/* Data will be changed when we connect with json file this data is only for test*/}
                    <InputField
                        className="w-full border p-2 rounded mb-4"
                        type="text"
                        value="Kilian James"
                        readOnly="true"
                    />
                    <InputField
                        className="w-full border p-2 rounded"
                        type="email"
                        value="kilianjames@gmail.com"
                        readOnly="true"
                    />
                </div>
                <div className="border-t pt-6">
                    <h3 className="text-red-600 font-semibold mb-2">Danger Zone</h3>
                    <p className="text-gray-600 mb-4">
                        Once you delete your account, there is no going back. Please be
                        certain.
                    </p>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
}
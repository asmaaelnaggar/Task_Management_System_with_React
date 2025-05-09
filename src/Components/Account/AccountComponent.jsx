import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import InputField from "../Inputs/InputField";

export default function AccountComponent() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Load currentUser on mount
  useEffect(() => {
    const stored = localStorage.getItem("currentUser");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Remove user from users array
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updated = users.filter(u => u.email !== user.email);
      localStorage.setItem("users", JSON.stringify(updated));

      // Clear currentUser
      localStorage.removeItem("currentUser");

      alert("Account deleted successfully!");
      navigate("/");
    }
  };

  if (!user) {
    return (
      <div className={theme === "light" ? "p-8 bg-[#F3F4F8]" : "p-8 bg-[#1E1F25]"}>
        <p className={theme === "light" ? "text-black" : "text-white"}>
          Loading account info...
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        theme === "light" ? "bg-[#F3F4F8] flex-1 p-8" : "bg-[#1E1F25] flex-1 p-8"
      }
    >
      <h2
        className={
          theme === "light"
            ? "text-black text-2xl font-bold mb-6"
            : "text-white text-2xl font-bold mb-6"
        }
      >
        Settings
      </h2>
      <div
        className={
          theme === "light" ? "bg-[#F3F4F8] p-6 rounded-2xl shadow" : "bg-black p-6 rounded-2xl shadow"
        }
      >
        <div className="mb-6">
          <h3
            className={
              theme === "light"
                ? "text-black text-xl font-semibold mb-4"
                : "text-white text-xl font-semibold mb-4"
            }
          >
            Account Information
          </h3>
          <InputField
            className="w-full border p-2 rounded mb-4"
            type="text"
            value={`${user.firstName} ${user.lastName}`}
            readOnly={true}
          />
          <InputField
            className="w-full border p-2 rounded"
            type="email"
            value={user.email}
            readOnly={true}
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
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

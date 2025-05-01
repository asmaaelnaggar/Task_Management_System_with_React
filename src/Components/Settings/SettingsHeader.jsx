import React, {  useRef } from "react";
import { FiEdit2 } from "react-icons/fi";
import { useAvatar } from "../../Context/AvatarContext";


const SettingsHeader = () => {
  const { avatar, setAvatar } = useAvatar();
  const inputRef = useRef(null);

  const bannerUrl = "/src/assets/images/background.png";

  const onPenClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatar(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" w-full relative mb-12" >
      <img src={bannerUrl} alt="Banner" className="w-full h-[180px] object-cover" />
      <div className=" absolute left-10 top-[110px] flex items-center gap-1">
        <div className="relative">
          <img src={avatar} alt="User" className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" />
          <button
            type="button"
            onClick={onPenClick}
            className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow hover:bg-blue-50 transition border border-[#B6E6FF]"
            title="Change photo"
          >
            <FiEdit2 className="text-[#246083] text-xl" />
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onFileChange}
            className="hidden"
          />
        </div>
        <h2 className="ml-4 mt-18 md:text-3xl xs:text-[25px] font-bold text-[#246083]">Settings</h2>
      </div>
    </div>
  );
};

export default SettingsHeader;

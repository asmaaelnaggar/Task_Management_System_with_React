import React, { useRef } from 'react';
import SideBar from '../Components/SideBar/SideBar';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';
import { FiMail, FiEdit2 } from 'react-icons/fi';
import { useAvatar } from '../Context/AvatarContext';

const bannerUrl = '/src/assets/background.png';

const SIDEBAR_WIDTH = 325;
const TOPBAR_HEIGHT = 64;

const SettingsProfile = () => {
  const { avatar, setAvatar } = useAvatar();
  const inputRef = useRef(null);

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
    <div className="bg-[#F8F9FB] w-screen h-screen min-h-screen overflow-hidden">
      {/* Sidebar - fixed position */}
      <aside
        className="fixed left-0 top-0 h-screen z-30"
        style={{ width: SIDEBAR_WIDTH }}
      >
        <SideBar />
      </aside>
      {/* Main area offset by sidebar */}
      <div
        className="flex flex-col h-screen overflow-hidden"
        style={{ marginLeft: SIDEBAR_WIDTH }}
      >
        {/* Sticky TopBar */}
        <div
          className="sticky top-0 z-20 w-full"
          style={{ height: TOPBAR_HEIGHT }}
        >
          <TopBar />
        </div>
        {/* Main scrollable content */}
        <div className="flex-1 overflow-y-auto pt-8 flex flex-col items-center w-full">
          {/* Banner */}
          <div className="w-full max-w-4xl px-3 relative">
            <img src={bannerUrl} alt="Banner" className="w-full h-[180px] object-cover rounded-xl" />
            <div className="absolute left-10 top-[110px] flex items-center gap-3">
              {/* Avatar with pen icon */}
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
              <h2 className="ml-4 mt-18 text-3xl font-bold text-[#246083]">Settings</h2>
            </div>
          </div>
          {/* Tabs */}
          <div className="w-full max-w-4xl px-3 mt-12">
            <div className="flex gap-10 border-b border-[#ECECEC]">
              <div className="px-1 pb-3 font-bold text-xl text-[#246083] border-b-4 border-[#246083]">Profile</div>
              <div className="px-1 pb-3 font-bold text-xl text-[#9BA6B2] cursor-pointer">Password</div>
              <div className="px-1 pb-3 font-bold text-xl text-[#9BA6B2] cursor-pointer">Account</div>
            </div>
          </div>
          {/* Settings Form */}
          <form className="w-full max-w-4xl px-3 mt-10">
            <div className="flex justify-end gap-4 mb-4">
              <button type="button" className="bg-[#ECECEC] rounded-lg px-5 py-2 text-[#343434] font-semibold">Cancel</button>
              <button type="submit" className="bg-[#5643F8] rounded-lg px-8 py-2 text-white font-semibold">Save</button>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              <div className="flex flex-col flex-1 min-w-[220px]">
                <label className="mb-1 text-[#343434] font-bold">First name</label>
                <input className="border border-[#E5E7EB] rounded-md px-4 py-2" value="Killan" readOnly />
              </div>
              <div className="flex flex-col flex-1 min-w-[220px]">
                <label className="mb-1 text-[#343434] font-bold">Last name</label>
                <input className="border border-[#E5E7EB] rounded-md px-4 py-2" value="James" readOnly />
              </div>
            </div>
            <div className="flex flex-col mt-5 max-w-md">
              <label className="mb-1 text-[#343434] font-bold">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999]">
                  <FiMail />
                </span>
                <input className="border border-[#E5E7EB] rounded-md px-10 py-2 w-full" value="killanjames@gmail.com" readOnly />
              </div>
            </div>
            <div className="flex flex-col mt-5 max-w-md">
              <label className="mb-1 text-[#343434] font-bold">Role</label>
              <input className="border border-[#E5E7EB] rounded-md px-4 py-2 w-full" value="Product Designer" readOnly />
            </div>
          </form>
          {/* Spacer for footer on scroll */}
          <div className="h-8"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SettingsProfile;


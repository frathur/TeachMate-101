import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

const SidebarButton: React.FC<{ label: string; icon: React.ReactElement; to: string; active?: boolean }> = ({ label, icon, to, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-2 rounded transition ${
      active ? "bg-red-500 text-white" : "text-gray-800 hover:bg-red-100"
    }`}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const Sidebar: React.FC = () => (
  <aside className="hidden md:block w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-black">TeachMate</h1>
    </div>
    <nav className="flex flex-col space-y-4">
      <SidebarButton label="New Chat" icon={<FaCommentDots />} to="/newchat" />
      {/* <SidebarButton label="Your Materials" icon={<FaFolderOpen />} to="/yourmaterials" /> */}
      {/* <SidebarButton label="Your Students" icon={<FaUserFriends />} to="/yourstudents" /> */}
      <SidebarButton label="Settings" icon={<FaCog />} to="/settings" active />
    </nav>
  </aside>
);

const Settings: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-white relative">
      <div className="absolute top-4 right-4">
        <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
      </div>
      <Sidebar />
      <div className="flex-1 flex flex-col items-center p-6">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-black">Settings</h2>
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
            <div className="flex items-center mt-2">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
              <button className="text-red-500 font-medium hover:underline">Change Profile Picture</button>
            </div>
          </div>
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">Account</h3>
            <p className="text-sm text-gray-600">
              Manage your account details, security options, and linked services. {" "}
              <a href="#" className="text-red-500 hover:underline">Manage Account</a>
            </p>
          </div>
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            <p className="text-sm text-gray-600">Customize your notification preferences.</p>
            <label className="flex items-center mt-3">
              <input type="checkbox" className="mr-2" /> Enable Email Notifications
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" /> Enable Push Notifications
            </label>
          </div>
          <div className="mb-6 border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">Privacy</h3>
            <p className="text-sm text-gray-600">Control who can see your profile and activity.</p>
            <button className="mt-2 text-red-500 hover:underline">Manage Privacy Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

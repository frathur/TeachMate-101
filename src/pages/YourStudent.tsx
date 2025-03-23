import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaUserPlus,
  FaUserGraduate,
  FaBars,
} from "react-icons/fa";

type SidebarButtonProps = {
  label: string;
  icon: React.ReactElement;
  active?: boolean;
  to: string;
};

const SidebarButton: React.FC<SidebarButtonProps> = ({
  label,
  icon,
  active,
  to,
}) => (
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

const YourStudents: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white relative">
      {/* Hamburger Icon for Mobile */}
      <div className="absolute top-4 left-4 md:hidden">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars className="text-2xl text-gray-600" />
        </button>
      </div>

      {/* User Profile Icon */}
      <div className="absolute top-4 right-4">
        <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
      </div>

      {/* LEFT SIDEBAR */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6 absolute md:static top-0 left-0 h-full md:h-auto z-50`}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">TeachMate</h1>
        </div>
        <nav className="flex flex-col space-y-4">
          <SidebarButton
            label="New chat"
            icon={<FaCommentDots />}
            to="/newchat"
          />
          <SidebarButton
            label="Your materials"
            icon={<FaFolderOpen />}
            to="/yourmaterials"
          />
          <SidebarButton
            label="Your Students"
            icon={<FaUserFriends />}
            to="/yourstudent"
            active
          />
          <SidebarButton label="Settings" icon={<FaCog />} to="/settings" />
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 flex flex-col items-center gap-6">
          {/* Teachers Card */}
          <div className="w-full max-w-3xl bg-gray-50 rounded-md shadow p-6">
            <h2 className="text-xl font-bold text-black mb-4">Teachers</h2>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center gap-1 text-red-500 hover:underline text-sm font-semibold"
              >
                <FaUserPlus />
                Invite Teacher
              </a>
            </div>
          </div>

          {/* Students Card */}
          <div className="w-full max-w-3xl bg-gray-50 rounded-md shadow p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">Students</h2>
            {/* Placeholder illustration for Students */} 
            <div className="w-full bg-white rounded-md h-48 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/300x150?text=Students+Illustration"
                alt="Students illustration"
                className="max-h-full"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="flex items-center gap-1 text-red-500 hover:underline text-sm font-semibold"
              >
                <FaUserGraduate />
                Add student
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default YourStudents;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPaperPlane,
  FaUpload,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";
import axios from "axios"; // Import Axios for API calls

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

const NewChat: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [loading, setLoading] = useState<boolean>(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmitPrompt = async () => {
    if (prompt.trim() === "") return;

    // Add user message to chat history
    const newMessages = [...messages, { role: "user", content: prompt }];
    setMessages(newMessages);
    setPrompt(""); // Clear input

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/chat", {
        message: prompt,
      });

      // Add AI response to chat history
      setMessages([...newMessages, { role: "assistant", content: response.data.reply }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex bg-white relative">
      {/* User Profile Icon */}
      <div className="absolute top-4 right-4">
        <FaUserCircle className="text-3xl text-gray-600 cursor-pointer" />
      </div>

      {/* LEFT SIDEBAR */}
      <aside className="hidden md:block w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">TeachMate</h1>
        </div>
        <nav className="flex flex-col space-y-4">
          <SidebarButton label="New chat" icon={<FaCommentDots />} active to="/newchat" />
          <SidebarButton label="Your Materials" icon={<FaFolderOpen />} to="/yourmaterials" />
          <SidebarButton label="Your Students" icon={<FaUserFriends />} to="/yourstudent" />
          <SidebarButton label="Settings" icon={<FaCog />} to="/settings" />
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 px-6 py-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-black mb-8">Your Assistant In Education</h2>

          {/* Chat Messages Display */}
          <div className="w-full max-w-lg border border-gray-300 rounded-lg p-4 mb-4 h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user" ? "bg-red-500 text-white" : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && <p className="text-gray-500 text-center">Typing...</p>}
          </div>

          {/* Prompt Input + Upload Button */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center border-2 border-red-500 rounded-full px-4 py-2 text-red-500 w-full max-w-lg">
              <input
                type="text"
                placeholder="Type prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 outline-none bg-transparent text-black placeholder:text-gray-500"
              />
              <button onClick={handleSubmitPrompt} className="ml-2">
                <FaPaperPlane className="cursor-pointer" />
              </button>
            </div>

            <div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    console.log("Selected file:", e.target.files[0].name);
                  }
                }}
              />
              <button
                onClick={handleUploadClick}
                className="flex items-center gap-2 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                <FaUpload />
                <span>Upload File</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewChat;

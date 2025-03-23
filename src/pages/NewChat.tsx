import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPaperPlane,
  FaUpload,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaUserCircle,
  FaBars, // Hamburger icon
} from "react-icons/fa";
import axios from "axios";

const SidebarButton = ({ label, icon, active, to }) => (
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

const NewChat = () => {
  const fileInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fileContent, setFileContent] = useState(null);
  const [fileName, setFileName] = useState("");

  // Sidebar open state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Show file name on UI
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmitPrompt = async () => {
    if (!prompt.trim()) return;
    setError("");

    const newMessages = [...messages, { role: "user", content: prompt }];
    setMessages(newMessages);
    setPrompt("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        prompt: prompt,
        fileContent: fileContent || null,
      });

      setMessages([
        ...newMessages,
        { role: "assistant", content: response.data.response || "No response" },
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setError("Failed to get a response. Please try again.");
    }
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmitPrompt();
    }
  };

  return (
    <div className="min-h-screen flex bg-white relative">
      {/* Hamburger Icon (visible on small screens) */}
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
      {/* On mobile: show if sidebarOpen === true */}
      {/* On md screens and above: always show */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6 absolute md:static top-0 left-0 h-full md:h-auto z-50`}
      >
        <h1 className="text-3xl font-bold text-black mb-8">TeachMate</h1>
        <nav className="flex flex-col space-y-4">
          <SidebarButton label="New chat" icon={<FaCommentDots />} active to="/newchat" />
          <SidebarButton label="Your Materials" icon={<FaFolderOpen />} to="/yourmaterials" />
          <SidebarButton label="Your Students" icon={<FaUserFriends />} to="/yourstudent" />
          <SidebarButton label="Settings" icon={<FaCog />} to="/settings" />
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col md:ml-0">
        <main className="flex-1 px-6 py-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-black mb-8">Your Assistant In Education</h2>

          {/* Chat Messages Display */}
          <div
            className="w-full max-w-lg border border-gray-300 rounded-lg p-4 mb-4 h-96 overflow-y-auto"
            ref={chatContainerRef}
          >
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

          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center border-2 border-red-500 rounded-full px-4 py-2 text-red-500 w-full max-w-lg">
              <input
                type="text"
                placeholder="Type prompt..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 outline-none bg-transparent text-black placeholder:text-gray-500 h-10"
                disabled={loading}
              />
              <button onClick={handleSubmitPrompt} className="ml-2" disabled={loading}>
                <FaPaperPlane className={`cursor-pointer ${loading ? "opacity-50" : ""}`} />
              </button>
            </div>
            <div>
              <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} />
              <button
                onClick={handleUploadClick}
                className="flex items-center gap-2 bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                <FaUpload />
                <span>Upload File</span>
              </button>
              {fileName && <p className="text-green-500 mt-2">File uploaded: {fileName}</p>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default NewChat;

// src/pages/YourMaterials.tsx
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { gapi } from "gapi-script";
import {
  FaUserCircle,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaGoogleDrive,
  FaPen,
  FaUpload,
  FaLink,
} from "react-icons/fa";
declare global {
  interface Window {
    gapi: any;
  }
}
declare global {
  interface Window {
    google: any;
  }
}
/// <reference types="google.picker" />
declare namespace google {
  export namespace picker {
    class PickerBuilder {
      addView(view: any): PickerBuilder;
      setOAuthToken(token: string): PickerBuilder;
      setDeveloperKey(key: string): PickerBuilder;
      setCallback(callback: Function): PickerBuilder;
      build(): any;
    }
    class ViewId {
      static readonly DOCS: string;
    }
    class Action {
      static readonly PICKED: string;
    }
    interface ResponseObject {
      action: string;
      docs: Array<{ id: string }>;
    }
  }
}



// Sidebar Button Component
type SidebarButtonProps = {
  label: string;
  icon: React.ReactElement;
  active?: boolean;
  to: string;
};
const SidebarButton: React.FC<SidebarButtonProps> = ({ label, icon, active, to }) => (
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

const NavButton: React.FC<{ label: string }> = ({ label }) => (
  <button className="hover:text-black">{label}</button>
);

const YourMaterials: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editorData, setEditorData] = useState('');
  const [pickerApiLoaded, setPickerApiLoaded] = useState(false);
  const [oauthToken, setOauthToken] = useState('');

  // Hidden file input for Upload
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log("Selected file:", e.target.files[0].name);
      // Implement further upload logic here
    }
  };

  // Open Google Drive
  const handleDriveClick = () => {
    if (pickerApiLoaded && oauthToken) {
      createPicker();
    } else {
      loadPicker();
    }
  };
  
  const loadPicker = () => {
    window.gapi.load('auth', { callback: onAuthApiLoad });
    window.gapi.load('picker', { callback: onPickerApiLoad });
  };
  const onAuthApiLoad = () => {
    window.gapi.auth.authorize(
      {
        client_id: '113763974135-ba6nmd4ctkaj2e8phfssm0apcuf2t1dq.apps.googleusercontent.com',
        scope: ['https://www.googleapis.com/auth/drive.file'],
        immediate: false,
      },
      handleAuthResult
    );
  };
  const onPickerApiLoad = () => {
    setPickerApiLoaded(true);
  };
  interface AuthResult {
    access_token: string;
    error?: string;
  }
  const handleAuthResult = (authResult : AuthResult) => {
    if (authResult && !authResult.error) {
      setOauthToken(authResult.access_token);
      createPicker();
    }
  };
  const createPicker = () => {
    if (pickerApiLoaded && oauthToken) {
      const picker = new window.google.picker.PickerBuilder()
        .addView(window.google.picker.ViewId.DOCS)
        .setOAuthToken(oauthToken)
        .setDeveloperKey('AIzaSyB2BQlFE4hI8OPcAj0H2mO4lqpEL0iQn4I')
        .setCallback(pickerCallback)
        .build();
      picker.setVisible(true);
    }
  };
  const pickerCallback = (data: google.picker.ResponseObject) => {
    if (data.action === window.google.picker.Action.PICKED) {
      const fileId = data.docs[0].id;
      console.log('Selected file ID:', fileId);
      // Implement further logic to handle the selected file
    }
  };


  // Open Notes Editor Modal
  const handleCreateClick = () => {
    setShowCreateModal(true);
  };
  const handleSave = () => {
    console.log('Saved content:', editorData);
    setShowCreateModal(false);
  };



  // Open Link Input
  const handleLinkClick = () => {
    setShowLinkInput(true);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* LEFT SIDEBAR */}
      <aside className="w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6">
        {/* Brand */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">TeachMate</h1>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col space-y-4">
          <SidebarButton label="New chat" icon={<FaCommentDots />} to="/newchat" />
          <SidebarButton label="Your materials" icon={<FaFolderOpen />} active to="/yourmaterials" />
          <SidebarButton label="Your Students" icon={<FaUserFriends />} to="/yourstudent" />
          <SidebarButton label="Settings" icon={<FaCog />} to="/settings" />
        </nav>
      </aside>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP NAV with centered links */}
        <header className="flex items-center justify-between px-6 py-4 border-b">
          {/* Left spacer */}
          <div className="w-1/3 hidden md:flex"></div>
          {/* Centered Nav Links */}
          <nav className="flex-1 flex justify-center space-x-6 text-gray-700 font-semibold">
            <NavButton label="About" />
            <NavButton label="How it works" />
            <NavButton label="Interface" />
          </nav>
          {/* Right: User Icon */}
          <div className="w-1/3 flex justify-end">
            <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
          </div>
        </header>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl bg-gray-50 rounded-md shadow p-6">
          {/* Title Field */}
          <div className="mb-6">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>
          {/* Description Field */}
          <div className="mb-6">
              <label className="block text-md font-semibold text-gray-800 mb-2">
                Description (Optional)
              </label>
              <textarea
                placeholder="Enter description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
              />
            </div>
  
          {/* Attach Section */}
          <div>
            <label className="block text-md font-semibold text-gray-800 mb-2">Attach</label>
            <div className="flex flex-wrap justify-center items-center space-x-6">
              {/* Drive */}
              <button onClick={handleDriveClick} className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <FaGoogleDrive className="text-xl text-blue-600" />
              </button>
              {/* Create */}
              <button onClick={handleCreateClick} className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <FaPen className="text-xl text-gray-700" />
              </button>
              {/* Upload (Already Implemented) */}
              <div className="flex flex-col items-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                    />
                  <button onClick={handleUploadClick} className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <FaUpload className="text-xl text-gray-700" />
              </button>
              </div>
              {/* Link */}
              <button onClick={handleLinkClick} className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <FaLink className="text-xl text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

          {/* YouTube */}
          {/* <div className="flex flex-col items-center">
              <button
                onClick={handleYouTubeClick}
                className="w-14 h-14 bg-white rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
              >
                <FaYoutube className="text-xl text-red-500" />
              </button>
              <span className="text-sm text-gray-600 mt-1">YouTube</span>
          </div> */}

            {/* Link Input Modal */}
            {showLinkInput && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-md w-96">
                  <h2 className="text-lg font-bold">Enter a Link</h2>
                  <input
                    type="text"
                    placeholder="Paste your link here"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full mt-3 p-2 border rounded"
                  />
                  <div className="flex justify-end mt-4">
                    <button onClick={() => setShowLinkInput(false)} className="mr-2">Cancel</button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">Process</button>
                  </div>
                </div>
              </div>
            )}

      {/* Create Notes Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md w-11/12 h-5/6">
            <h2 className="text-lg font-bold mb-4">Create Notes</h2>
            <div className="border border-gray-300 rounded mb-4 h-full">
              <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setEditorData(data);
                }}
                config={{
                  toolbar: [
                    'heading', '|', 'bold', 'italic', 'underline', 'strikethrough', '|',
                    'bulletedList', 'numberedList', 'blockQuote', '|',
                    'link', 'insertTable', 'mediaEmbed', '|',
                    'undo', 'redo'
                  ]
                }}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setShowCreateModal(false)}
                className="mr-2 px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
    

  );
};
export default YourMaterials;

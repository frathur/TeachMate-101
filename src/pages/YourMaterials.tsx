import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaTrash, 
  FaUserCircle,
  FaCommentDots,
  FaFolderOpen,
  FaUserFriends,
  FaCog,
  FaUserPlus,
  FaUserGraduate, 
} from "react-icons/fa";

const YourStudents: React.FC = () => {
  const [teachers, setTeachers] = useState<{ name: string; email: string }[]>([]);
  const [students, setStudents] = useState<{ name: string; reference: string; index: string }[]>([]);
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentReference, setStudentReference] = useState('');
  const [studentIndex, setStudentIndex] = useState('');
  const [showTeacherForm, setShowTeacherForm] = useState(false);
  const [showStudentForm, setShowStudentForm] = useState(false);

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
  

  // Load history from localStorage on mount
  useEffect(() => {
    const storedTeachers = localStorage.getItem("teachers");
    const storedStudents = localStorage.getItem("students");

    if (storedTeachers) setTeachers(JSON.parse(storedTeachers));
    if (storedStudents) setStudents(JSON.parse(storedStudents));
  }, []);

  // Save history to localStorage when updated
  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
    localStorage.setItem("students", JSON.stringify(students));
  }, [teachers, students]);

  const handleInviteTeacher = () => {
    if (teacherName && teacherEmail) {
      setTeachers([...teachers, { name: teacherName, email: teacherEmail }]);
      setTeacherName('');
      setTeacherEmail('');
      setShowTeacherForm(false); // Hide form after adding
      
// Open Gmail with pre-filled recipient and message
    const subject = encodeURIComponent("Invitation to TeachMate");
    const body = encodeURIComponent(`Hello,\n\nYou have been invited to join TeachMate as a teacher.\n\nBest regards,\nTeachMate Team`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${teacherEmail}&su=${subject}&body=${body}`, '_blank');
    }
  };

  const handleAddStudent = () => {
    if (studentName && studentReference && studentIndex) {
      setStudents([...students, { name: studentName, reference: studentReference, index: studentIndex }]);
      setStudentName('');
      setStudentReference('');
      setStudentIndex('');
      setShowStudentForm(false); // Hide form after adding
    }
  };

  // Clear history
  const clearHistory = () => {
    localStorage.removeItem("teachers");
    localStorage.removeItem("students");
    setTeachers([]);
    setStudents([]);
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
          <SidebarButton label="Your materials" icon={<FaFolderOpen />} to="/yourmaterials" />
          <SidebarButton label="Your Students" icon={<FaUserFriends />} active to="/yourstudent" />
          <SidebarButton label="Settings" icon={<FaCog />} to="/settings" />
        </nav>
      </aside>
      
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 ">Your Students & Teachers</h1>

      {/* Teacher Section */}
      <div className="bg-gray-100 p-6 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-4">Teachers</h2>

        {/* Toggle Teacher Form */}
        <button
          onClick={() => setShowTeacherForm(!showTeacherForm)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center gap-2 mb-4"
        >
          <FaUserPlus /> {showTeacherForm ? "Cancel" : "Add Teacher"}
        </button>

        {showTeacherForm && (
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full sm:w-1/3 p-3 border rounded-lg text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              className="w-full sm:w-1/3 p-3 border rounded-lg text-lg"
            />
            <button
              onClick={handleInviteTeacher}
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Invite
            </button>
          </div>
        )}

        <ul className="mt-4">
          {teachers.map((teacher, index) => (
            <li key={index} className="text-lg">{teacher.name} ({teacher.email})</li>
          ))}
        </ul>
      </div>

      {/* Student Section */}
      <div className="bg-gray-100 p-6 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-4">Students</h2>

        {/* Toggle Student Form */}
        <button
          onClick={() => setShowStudentForm(!showStudentForm)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center gap-2 mb-4"
        >
          <FaUserGraduate /> {showStudentForm ? "Cancel" : "Add Student"}
        </button>

        {showStudentForm && (
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full sm:w-1/4 p-3 border rounded-lg text-lg"
            />
            <input
              type="text"
              placeholder="Reference"
              value={studentReference}
              onChange={(e) => setStudentReference(e.target.value)}
              className="w-full sm:w-1/4 p-3 border rounded-lg text-lg"
            />
            <input
              type="text"
              placeholder="Index"
              value={studentIndex}
              onChange={(e) => setStudentIndex(e.target.value)}
              className="w-full sm:w-1/4 p-3 border rounded-lg text-lg"
            />
            <button
              onClick={handleAddStudent}
              className="w-full sm:w-auto bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Add
            </button>
          </div>
        )}

        <ul className="mt-4">
          {students.map((student, index) => (
            <li key={index} className="text-lg">{student.name} ({student.reference}, {student.index})</li>
          ))}
        </ul>
      </div>

      {/* Clear History Button */}
      <button
        onClick={clearHistory}
        className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 flex items-center gap-2"
      >
        <FaTrash /> Clear History
      </button>
    </div>
    </div>
  );
};

export default YourStudents;

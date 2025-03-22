import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/Untitled1.png";
import missionImage from "../assets/3907915.png"; // Add your mission image in assets
import visionImage from "../assets/6384624.jpg";   // Add your vision image in assets
import { BsFiletypeSvg } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";
import { FaRegHandshake, FaTasks, FaCommentDots, FaFolderOpen, FaUserFriends, FaCog } from "react-icons/fa";

// AnimatedCard component for staggered animation on scroll
function AnimatedCard({ children, delay = 0 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// // Sidebar Button component
// const SidebarButton = ({ label, icon, to, active }) => (
//   <Link
//     to={to}
//     className={`flex items-center gap-3 px-4 py-2 rounded transition ${
//       active ? "bg-red-500 text-white" : "text-gray-800 hover:bg-red-100"
//     }`}
//   >
//     {icon}
//     <span>{label}</span>
//   </Link>
// );

// Main Sidebar (from chat screen)
// const Sidebar = () => (
//   <aside className="hidden md:block w-72 bg-[#FFECEC] rounded-r-[2rem] flex flex-col py-8 px-6">
//     <div className="mb-8">
//       <h1 className="text-3xl font-bold text-black">TeachMate</h1>
//     </div>
//     <nav className="flex flex-col space-y-4">
//       <SidebarButton label="New Chat" icon={<FaCommentDots />} to="/newchat" />
//       <SidebarButton label="Your Materials" icon={<FaFolderOpen />} to="/yourmaterials" />
//       <SidebarButton label="Your Students" icon={<FaUserFriends />} to="/yourstudents" />
//       <SidebarButton label="Settings" icon={<FaCog />} to="/settings" active />
//     </nav>
//   </aside>
// );

// Custom Footer with corporate styling
function CustomFooter() {
  return (
    <footer className="bg-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">TeachMate</h3>
          <p className="text-sm">
            Empowering teachers with AI solutions to transform education.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-red-400 mt-8">
        <p className="text-center text-xs py-4">
          © {new Date().getFullYear()} TeachMate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navbar with section links */}
      <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-black">TeachMate</div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link to="/about#about" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="/about#mission" className="hover:text-black">
              Mission
            </Link>
          </li>
          <li>
            <Link to="/about#vision" className="hover:text-black">
              Vision
            </Link>
          </li>
          <li>
            <Link to="/about#features" className="hover:text-black">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about#steps" className="hover:text-black">
              Steps
            </Link>
          </li>
          <li>
            <Link to="/about#team" className="hover:text-black">
              Team
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link to="/login" className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
            Log in
          </Link>
          <Link to="/signup" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Try free
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col md:flex-row justify-center items-center px-8 py-10">
          <div className="md:w-1/2 flex justify-center">
            <img src={heroImage} alt="Illustration" className="max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 text-center md:text-left">
            <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
              Empowering <br /> Teachers with AI
            </h1>
            <p className="text-gray-700 text-2xl mb-6">
              TeachMate is designed to support teachers by simplifying routine tasks and increasing efficiency.
            </p>
            <Link to="/signup" className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition">
              Learn More
            </Link>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id="mission" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-8 py-10">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our mission is to empower educators by providing cutting-edge AI tools that simplify administrative tasks, enhance teaching, and foster personalized learning.
            </p>
            <img src={missionImage} alt="Our Mission" className="mx-auto max-w-md rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Our Vision Section */}
        <section id="vision" className="min-h-screen flex flex-col justify-center items-center bg-white px-8 py-10">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
            <p className="text-xl text-gray-700 mb-8">
              We envision a world where technology and education merge seamlessly to create dynamic, personalized learning environments that cater to the unique needs of every student.
            </p>
            <img src={visionImage} alt="Our Vision" className="mx-auto max-w-md rounded-lg shadow-lg" />
          </div>
        </section>

        {/* Why Choose TeachMate? Section */}
        <section id="features" className="min-h-screen flex flex-col justify-center px-8 py-10">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose TeachMate?</h2>
          <p className="text-center text-xl text-gray-700 mb-8">
            TeachMate empowers teachers with these key features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedCard delay={0}>
              <div className="group h-[300px] flex flex-col justify-center p-6 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
                <div className="flex justify-center">
                  <GiArtificialHive className="h-7 w-7 mb-4 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  Personalizing Training
                </h3>
                <p className="text-base text-gray-600 group-hover:text-white">
                  Adapt lesson plans to each student's unique needs.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div className="group h-[300px] flex flex-col justify-center p-10 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
                <div className="flex justify-center">
                  <FaTasks className="h-6 w-6 mb-4 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  Automate Tasks
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white">
                  Reduce repetitive tasks and focus on teaching.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={400}>
              <div className="group h-[300px] flex flex-col justify-center p-10 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
                <div className="flex justify-center">
                  <FaRegHandshake className="h-8 w-8 mb-4 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  Engagement Tools
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white">
                  Keep students actively involved with interactive content.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={600}>
              <div className="group h-[300px] flex flex-col justify-center p-10 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
                <div className="flex justify-center">
                  <BsFiletypeSvg className="h-6 w-6 mb-4 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                  Analyzing Results
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-white">
                  Track performance and improve lesson strategies.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* How TeachMate Works Section */}
        <section id="steps" className="min-h-screen flex flex-col justify-center px-8 py-10 bg-gradient-to-b from-white to-red-50">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            How TeachMate Works
          </h2>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Follow these three simple steps to transform your classroom with AI.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <AnimatedCard delay={0}>
              <div className="max-w-xs text-center p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white h-[300px] flex flex-col justify-center">
                <div className="flex justify-center mb-4">
                  <span className="inline-block w-20 h-20 bg-red-100 text-red-500 text-3xl font-bold rounded-full flex items-center justify-center">
                    1
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-black">Download Your Materials</h3>
                <p className="text-sm text-gray-600">
                  Upload your lesson plans and materials for analysis.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <div className="max-w-xs text-center p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white h-[300px] flex flex-col justify-center">
                <div className="flex justify-center mb-4">
                  <span className="inline-block w-20 h-20 bg-red-100 text-red-500 text-3xl font-bold rounded-full flex items-center justify-center">
                    2
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-black">Analysis And Personalization</h3>
                <p className="text-sm text-gray-600">
                  TeachMate analyzes your materials and customizes them for every student.
                </p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={400}>
              <div className="max-w-xs text-center p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white h-[300px] flex flex-col justify-center">
                <div className="flex justify-center mb-4">
                  <span className="inline-block w-20 h-20 bg-red-100 text-red-500 text-3xl font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-black">Monitoring Results</h3>
                <p className="text-sm text-gray-600">
                  Track progress and receive actionable insights for improvement.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section id="team" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-8 py-10">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-xl text-gray-700 mb-8 max-w-3xl">
            Our dedicated team of experts is committed to revolutionizing education through innovative AI solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Team Member Card */}
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800">Alex Johnson</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800">Maria Rodriguez</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800">Samuel Lee</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
          </div>
        </section>
      </main>

      <CustomFooter />
    </div>
  );
}

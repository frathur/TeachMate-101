import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-red-50 to-red-100">
      {/* TOP NAVIGATION */}
      <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        {/* Left: Brand Name */}
        <div className="text-2xl font-bold text-black">TeachMate</div>

        {/* Middle: Nav Links (removed Interface) */}
        {/* <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="/about#how-it-works" className="hover:text-black">
              How it works
            </Link>
          </li>
        </ul> */}

        {/* Right: Log in & Try free */}
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="border border-black text-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Try free
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4 mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          AI For Teachers <br className="hidden md:block" />
          Your New <span className="bg-gradient-to-r from-red-500 via-red-200 to-transparent rounded-tl-none rounded-br-none rounded-lg px-[5px] py-[2px] ml-[-7px] mr-[-7px]">Assistant</span> In Education
        </h1>
        <p className="max-w-xl text-gray-700 mb-8">
          Increase the efficiency of the learning process and adapt class
          materials to create an individual approach to students.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
          <Link
            to="/login"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Start Now
          </Link>
          <Link
            to="/about#how-it-works"
            className="border border-red-500 bg-red-50 text-black px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
          >
            Learn more
          </Link>
        </div>
      </main>
    </div>
  );
}

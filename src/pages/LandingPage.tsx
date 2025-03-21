import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function LandingPage() {
  return (
    <>
    <div>
      <div>
        <Navbar />
      </div>
    <div className="bg-white">

      <main className="relative top-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          AI For Teachers: <br className="hidden md:block" />
          Your New <span className="bg-gradient-to-r from-red-400 via-red-200 to-transparent rounded-tl-none rounded-br-none rounded-lg px-[5px] py-[2px] ml-[-7px] mr-[-7px]">Assistant</span> In Education
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
            to="/"
            className="border-1 border-red-500 bg-red-50 text-black px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition"
          >
            Learn more
          </Link>
        </div>
      </main>

    </div>
    <div className="mt-[40px]">
      <Footer />
    </div>
    </div>
  </>
  );
}

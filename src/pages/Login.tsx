import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../assets/pnwin.png"

export default function Login() {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <>
    <div>
      <div className="fixed -top-0 w-1/2 h-full overflow-hidden -left-80">
        <div className="absolute w-[590px] h-[590px] border-[115px] border-red-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent" />
      </div>
    <div className="fixed bg-white left-130 top-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-6">Login your account!</h2>

        <div className="flex space-x-8 mb-6">
          <button
            onClick={() => setActiveTab("email")}
            className={`pb-1 font-bold ${
              activeTab === "email"
                ? "border-b-2 border-red-500 text-black"
                : "text-black/50"
            }`}
          >
            E-mail
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`pb-1 font-bold ${
              activeTab === "mobile"
                ? "border-b-2 border-red-500 text-black"
                : "text-black/50"
            }`}
          >
            Mobile Number
          </button>
        </div>

        {/* Input Fields */}
        <input
          type="text"
          placeholder={activeTab === "mobile" ? "Mobile Number" : "Email"}
          className="w-80 mb-3 p-3 border border-gray-300 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 mb-2 p-3 border border-gray-300 rounded focus:outline-none"
        />

        {/* Forgot Password */}
        <div className="w-80 text-right text-sm mb-4 text-black cursor-pointer">
          Forgot password??
        </div>
        </Link>

        {/* Continue Button */}
        <button className="w-80 bg-red-500 text-white py-3 rounded font-bold hover:bg-red-600 mb-4">
          Continue
        </button>

        {/* Sign in with */}
        <p className="text-sm text-gray-600 mb-2">Sign in with</p>
        <div className="flex space-x-6 mb-4">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
        </div>

        {/* Don't have an account?? */}
        <p className="text-sm">
          Don’t have an account??
          <span className="text-red-500 font-bold ml-1 cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
    </div>
    </>
  );
}

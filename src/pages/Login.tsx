import React, { useState } from "react";
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

        <div className="relative mb-6">
                        <input type="text" id="default_outlined1" className="block px-2.5 pb-2.5 pt-4 w-100 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder={activeTab === "email" ? "Email" : "Mobile"} />
                        <label htmlFor="default_outlined1" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{activeTab === "mobile" ? "Mobile Number" : "Email"}</label>
                    </div>

          <>
        <div className="relative mb-6">
                <input type="password" id="default_outlined" className="block px-2.5 pb-2.5 pt-4 w-100 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                <label htmlFor="default_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
            </div>
          </>

        <Link to="/forgot">
        <div className="w-100 text-right text-sm mb-4 hover:underline text-black cursor-pointer">
          Forgot password??
        </div>
        </Link>

        {/* Continue Button */}
        <button className="w-100 bg-red-500 text-white py-3 rounded-lg font-bold hover:bg-red-600 mb-4">
          Continue
        </button>

        {/* Sign in with */}
        <p className="text-sm text-gray-600 mb-2">Sign in with</p>
        <div className="flex space-x-[-4px] ml-[15px] mb-1">
          <Link to="/">
          <FaFacebook className="h-[32px] w-[32px] text-blue-600 text-2xl cursor-pointer" />
          </Link>
          <Link to="/">
          <img src={image} className="h-[60px] w-[60px] mt-[-14px]"/>
          </Link>
        </div>

        {/* Don't have an account?? */}
        <p className="text-m">
          Don’t have an account?
          <span className="text-[#d1a14a] font-bold ml-1 cursor-pointer">
            <Link to="/signup">
            Sign up
            </Link>
          </span>
        </p>
      </div>
    </div>
    </div>
    </>
  );
}

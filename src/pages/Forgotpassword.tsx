import React from "react";
import { Link } from "react-router-dom";

export default function Forgotpassword() {

  return (
    <>
    <div>
      <div className="fixed -top-0 w-1/2 h-full overflow-hidden -left-80">
        <div className="absolute w-[590px] h-[590px] border-[115px] border-red-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent" />
      </div>
    <div className="fixed bg-white left-130 top-30">
     
      <div className="flex flex-col justify-center items-center">

        <h2 className="text-2xl text-left ml-[-170px] font-medium mb-2">Find your account</h2>
          <p className="ml-[-153px] mb-8">Enter your email or username.</p>

        <div className="relative mb-[6px]">
          <input type="text" id="default_outlined_m" className="block px-2.5 pb-2.5 pt-4 w-90 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="" required/>
          <label htmlFor="default_outlined_m" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username, Email or Mobile number</label>
        </div>

        <div className="ml-[-1px] mb-[30px]">
          <p className="font-light text-sm">You will receive an OTP via Mail and SMS notifications from us
            <br />
            <span>for security and login purposes.</span></p>
        </div>

        <div className="space-x-[-62px] space-y-[-22px]">
          <Link to="/login" className="hover:underline hover:text-red-600 cursor-pointer">
            Cancel
          </Link>

        <button className="w-25 bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 mb-8 mt-[-10px] ml-[257px]">
          Continue
        </button>

        </div>

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

import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div>
        {/* NAVIGATION BAR */}
      <nav className="h-[50px] flex items-center justify-between py-[24.7px] mt-[-16px] ml-[-17px] px-7 border-b border-gray-200">

          <div style={{font: '50px Jaro'}}>
          TeachMate
          </div>


        {/* Middle: Nav Links */}
        <ul style={{font: '700 18px Ariel'}}
        className="hidden md:flex space-x-8 font-semibold">
          <li className="cursor-pointer hover:text-black hover:underline"
          >
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-black hover:underline">
            <Link to="/howitworks">How it works</Link>
          </li>
          <li className="cursor-pointer hover:text-black hover:underline">
            <Link to="/interface">Interface</Link>
          </li>
        </ul>

        <div style={{font: '600 16px Ariel'}} className="flex space-x-[-10px] mt-[2px]">
          <Link
            to="/login"
            className=" text-black px-3 py-2 hover:text-red-700 hover:underline mr-[-8px]"
          >
            login
          </Link>
          <p className='py-2 justify-self-center'>/</p>
          <Link
            to="/signup"
            className="ml-[-4px] hover:text-red-700 hover:underline px-4 py-2 transition"
          >
            try free
          </Link>
        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
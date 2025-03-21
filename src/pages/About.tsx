// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer"
import image from "../assets/Untitled1.png";
import { BsFiletypeSvg } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";
import { FaRegHandshake, FaTasks } from "react-icons/fa";


export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div>
        <Navbar />
      </div>
      
      <main className="flex-1 px-8 py-10">
        <section className="flex flex-col md:flex-row justify-center items-center mt-[-10px] ml-[140px] mb-12">
        <div>
            <img src={image} className="md:text-4xl"/>
          </div>
          <div className="ml-[30px] mt-[-20px] md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <p className="text-5xl font-bold text-black mb-4 leading-tight">
              Empowering <p>Teachers with AI</p>
            </p>
            <p className="text-gray-700 text-2xl mb-6">
              TeachMate is designed to support teachers by simplifying routine
              tasks and increasing efficiency.
            </p>
            <div className="mt-[40px]">
            <Link
              to="/signup"
              className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
            >
              Learn More
            </Link>
            </div>
          </div>
          
        </section>

        <section className="mb-16">
          <h2 className="text-4xl ml-[-460px] mt-[] font-bold text-center mb-4">
            Why Choose TeachMate?
          </h2>
          <p className="text-center text-xl ml-[-389px] text-gray-700 mb-8">
            TeachMate empowers teachers with these key features:
          </p>
          <div className="ml-[100px] mt-[40px] grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 border rounded-lg text-center hover:shadow transition">
              <div>
                <GiArtificialHive className="h-7 w-7 mt-[-8px] mb-[17px]"/>
              </div>
              <h3 className="text-lg text-left font-semibold mt-[8px] mb-2">
                Personalizing Training
              </h3>
              <p className="text-m text-gray-600 text-left">
                AI adapts materials and teaching methods to individual needs, ensuring effective learning lesson plans to each student’s unique needs.
              </p>
            </div>
            
            <div className="p-10 border rounded-lg text-center hover:shadow transition">
              <div>
                <FaTasks className="h-6 w-6 mt-[-22px] mb-[20px]"/>
              </div>
              <h3 className="text-lg font-semibold mt-[8px] mb-2 text-left">Automate Tasks</h3>
              <p className="text-sm text-left text-gray-600">
                Let AI handle administrative tasks like grading and preparing materials whiles ensuring reduce repetitive tasks and focus on teaching.
              </p>
            </div>
            <div className="p-10 border rounded-lg text-center hover:shadow transition">
            <div>
                <FaRegHandshake className="h-8 w-8 mt-[-25px] mb-[14px]"/>
              </div>
              <h3 className="text-lg text-left font-semibold mb-2">Engagement Tools</h3>
              <p className="text-sm text-left text-gray-600">
                Use AI-powered tools to boost student interaction and participation by using interactive content.
              </p>
            </div>
            
            <div className="p-10 border rounded-lg text-center hover:shadow transition">
            <div>
                <BsFiletypeSvg className="h-6 w-6 mt-[-20px] mb-[14px]"/>
              </div>
              <h3 className="text-lg text-left font-semibold mb-2">Analyzing Results</h3>
              <p className="text-sm text-left text-gray-600">
                Get real-time analytics on student performance by using tracling systems to respond quickly to the needs and improve lesson strategies.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-4">
            How TeachMate Works
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-xl mx-auto">
            Three simple steps to make the learning process more effective and
            personalized.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="max-w-xs text-center">
              <div className="mb-4">
                <span className="inline-block w-16 h-16 bg-red-100 text-red-500 text-2xl font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </div>
              <h3 className="font-semibold mb-2">Download Your Materials</h3>
              <p className="text-sm text-gray-600">
                Add lessons and plans for TeachMate to analyze.
              </p>
            </div>

            <div className="max-w-xs text-center">
              <div className="mb-4">
                <span className="inline-block w-16 h-16 bg-red-100 text-red-500 text-2xl font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
              <h3 className="font-semibold mb-2">Analysis And Personalization</h3>
              <p className="text-sm text-gray-600">
                TeachMate analyzes your materials and adapts them to each
                student’s needs.
              </p>
            </div>

            <div className="max-w-xs text-center">
              <div className="mb-4">
                <span className="inline-block w-16 h-16 bg-red-100 text-red-500 text-2xl font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              <h3 className="font-semibold mb-2">Monitoring Results</h3>
              <p className="text-sm text-gray-600">
                Track student progress and get recommendations for further
                improvement.
              </p>
            </div>
          </div>
        </section>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

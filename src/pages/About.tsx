import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import image from "../assets/Untitled1.png";
import { BsFiletypeSvg } from "react-icons/bs";
import { GiArtificialHive } from "react-icons/gi";
import { FaRegHandshake, FaTasks } from "react-icons/fa";

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
    if (ref.current) {
      observer.observe(ref.current);
    }
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

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 px-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="text-2xl font-bold text-black">TeachMate</div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
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
        </ul>
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

      {/* Main Content */}
      <main className="flex-1 px-8 py-10">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-center items-center mt-4 mb-12">
          <div className="md:w-1/2 flex justify-center">
            <img src={image} alt="Illustration" className="max-w-md" />
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:pl-10">
            <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
              Empowering <br /> Teachers with AI
            </h1>
            <p className="text-gray-700 text-2xl mb-6">
              TeachMate is designed to support teachers by simplifying routine tasks
              and increasing efficiency.
            </p>
            <div className="mt-6">
              <Link
                to="/signup"
                className="bg-red-500 text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose TeachMate? Section */}
        <section className="m-30">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why Choose TeachMate?
          </h2>
          <p className="text-center text-xl text-gray-700 mb-8">
            TeachMate empowers teachers with these key features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedCard delay={0}>
              <div className="group p-6 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
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
              <div className="group p-10 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
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
              <div className="group p-10 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
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
              <div className="group p-10 border rounded-lg text-center transition-colors duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg">
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
        <section id="how-it-works" className="mb-16 py-12 bg-gradient-to-b from-white to-red-50">
          <h2 className="text-3xl font-bold text-center text-black mb-6">
            How TeachMate Works
          </h2>
          <p className="text-center text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Follow these three simple steps to transform your classroom with AI.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <AnimatedCard delay={0}>
              <div className="max-w-xs text-center p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white min-h-[300px] flex flex-col justify-center">
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
              <div className="max-w-xs text-center p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white min-h-[300px] flex flex-col justify-center">
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
              <div className="max-w-xs text-center p-6 border rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl bg-white min-h-[300px] flex flex-col justify-center">
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
      </main>
      <Footer />
    </div>
  );
}

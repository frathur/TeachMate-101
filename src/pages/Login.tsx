import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Forgotpassword from "./Forgotpassword";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("email");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/NewChat"); // Redirect after login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="fixed -top-0 w-1/2 h-full overflow-hidden -left-80">
        <div className="absolute w-[590px] h-[590px] border-[115px] border-red-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent" />
      </div>
      <div className="fixed bg-white left-130 top-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-6">Login to your account!</h2>

          {error && <p className="text-red-500 mb-2">{error}</p>}

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

          {/* Login Form */}
          <form onSubmit={handleLogin} className="w-80">
            <input
              type={activeTab === "mobile" ? "text" : "email"}
              placeholder={activeTab === "mobile" ? "Mobile Number" : "Email"}
              className="w-full mb-3 p-3 border border-gray-300 rounded focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-2 p-3 border border-gray-300 rounded focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Forgot Password */}
            <div className="text-right text-sm mb-4 text-black cursor-pointer">
              <Link to="/Forgotpassword">Forgot password?</Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded font-bold hover:bg-red-600 mb-4"
            >
              Continue
            </button>
          </form>

          {/* Sign in with */}
          <p className="text-sm text-gray-600 mb-2">Sign in with</p>
          <div className="flex space-x-6 mb-4">
            <Link to="/oauth/facebook">
              <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            </Link>
            <Link to="/oauth/google">
              <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
            </Link>
          </div>

          {/* Don't have an account? */}
          <p className="text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-red-500 font-bold cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

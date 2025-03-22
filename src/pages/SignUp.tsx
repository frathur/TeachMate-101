import React, { useState, useEffect } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Added type annotations for clarity
  const calculatePasswordStrength = (pwd: string): number => {
    let strength = 0;
    if (pwd.length >= 8) strength += 1;
    if (/[A-Z]/.test(pwd)) strength += 1;
    if (/[0-9]/.test(pwd)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;
    return strength;
  };

  useEffect(() => {
    setIsError(confirmPassword !== "" && password !== confirmPassword);
    setPasswordStrength(calculatePasswordStrength(password));
  }, [password, confirmPassword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (!isError && passwordStrength >= 3) {
        setSuccessMessage("Account successfully created!");
        setTimeout(() => {
          setPassword("");
          setConfirmPassword("");
          setSuccessMessage("");
        }, 2000);
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex w-screen h-screen bg-white">
      {/* Left Side - Red Circle */}
      <div className="relative w-1/3 h-full overflow-hidden">
        <div className="absolute w-[200%] h-[200%] bg-red-500 rounded-full -top-1/2 -left-1/2" />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="w-80 space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Surname"
              className="w-1/2 p-3 border rounded"
              required
            />
          </div>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IconEyeOff /> : <IconEye />}
            </span>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full p-3 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <IconEyeOff /> : <IconEye />}
            </span>
          </div>
          {isError && (
            <p className="text-red-500 text-sm">Passwords do not match!</p>
          )}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded font-bold hover:bg-red-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 font-bold">
            Login
          </Link>
        </p>
        <div className="flex items-center w-80 mt-6 mb-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>
        <div className="flex flex-col space-y-3 w-80">
          <Link to="/oauth/google" className="w-full">
            <button className="w-full flex items-center justify-center border rounded py-2 hover:bg-gray-100">
              <FaGoogle className="text-red-500 text-xl mr-2" />
              <span className="font-semibold">Sign up with Google</span>
            </button>
          </Link>
          <Link to="/oauth/facebook" className="w-full">
            <button className="w-full flex items-center justify-center border rounded py-2 hover:bg-gray-100">
              <FaFacebook className="text-blue-600 text-xl mr-2" />
              <span className="font-semibold">Sign up with Facebook</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

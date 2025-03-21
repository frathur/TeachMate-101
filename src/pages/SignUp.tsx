import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import image from "../assets/pnwin.png"
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function SignUp() {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0); 

  const calculatePasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength += 1;
    if (pwd.match(/[A-Z]/)) strength += 1;
    if (pwd.match(/[0-9]/)) strength += 1;
    if (pwd.match(/[^A-Za-z0-9]/)) strength += 1;
    return strength;
  };

  useEffect(() => {
    setIsError(confirmPassword !== '' && password !== confirmPassword);
    setPasswordStrength(calculatePasswordStrength(password));
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      if (!isError && passwordStrength >= 3) {
        setSuccessMessage('Password successfully updated!');
        setTimeout(() => {
          setPassword('');
          setConfirmPassword('');
          setSuccessMessage('');
        }, 2000);
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const strengthColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500', 
    'bg-green-500',
  ];

  return (
    <>
    <div>
    <div className="fixed -top-0 w-1/2 h-full overflow-hidden -left-80">
      <div className="absolute w-[590px] h-[590px] border-[115px] border-red-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent" />
    </div>
    <div className="fixed bg-white left-130 top-[40px]">
    <h2 className="text-2xl font-bold ml-38 mb-2">Create Account</h2>

      
      <div className="flex-1 flex flex-col justify-center items-center">

       
        <div className="w-80">
          
          <div className="flex space-x-2 mb-4">
            <div className="relative">
                <input type="text" id="default_outlined_f" className="block px-2.5 pb-2.5 pt-4 w-[196px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="firstname" required/>
                <label htmlFor="default_outlined_f" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First Name</label>
            </div>

            <div className="relative">
                <input type="text" id="default_outlined_s" className="block px-2.5 pb-2.5 pt-4 w-[196px] text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="surname" required/>
                <label htmlFor="default_outlined_s" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Surname</label>
            </div>
          </div>

            <div className="relative mb-4">
                <input type="number" id="default_outlined_m" className="block px-2.5 pb-2.5 pt-4 w-100 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="Mobile" required/>
                <label htmlFor="default_outlined_m" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Mobile Number</label>
            </div>

            <div className="relative mb-4">
                <input type="text" id="default_outlined_e" className="block px-2.5 pb-2.5 pt-4 w-100 text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder="@tech" required/>
                <label htmlFor="default_outlined_e" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md space-y-6">
          {/* Password */}
          <div className="flex space-x-2 mb-7">
            <div className="relative">
                <input 
                type={showPassword ? 'text' : 'password'} 
                id="default_outlined_p" 
                value={password} 
                aria-invalid={isError}
                onChange={(e) => setPassword(e.target.value)}
                 className={`block px-2.5 pb-2.5 pt-4 w-[196px] text-sm text-gray-900 bg-transparent rounded-lg border-1 ${isError ? 'border-red-500' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 ${isError ? 'focus:ring-red-500' : 'focus:ring-blue-500'} peer`} placeholder=" " required/>
                <label htmlFor="default_outlined_p" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label={showPassword ? "Hide Password" : "Show Password"}
                  >
                      {showPassword ? (
                        <IconEye className="h-[20px] w-[20px] size-4 text-gray-500" />
                          ) : (
                        <IconEyeOff className="h-[20px] w-[20px] size-4 text-gray-500" />
                          )}
                  </button>
            </div>

            <div className="relative">
                <input
                type={showConfirmPassword ? 'text' : 'password'} 
                id="default_outlined_cp" 
                value={confirmPassword} 
                aria-invalid={isError}
                onChange={(e) => setConfirmPassword(e.target.value)} 
                className={`block px-2.5 pb-2.5 pt-4 w-[196px] text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                  isError ? 'border-red-500' : 'border-gray-300'
                } appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-1 ${
                  isError ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                } peer`} placeholder="Password" required/>

                <label htmlFor="default_outlined_cp" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    aria-label={showConfirmPassword ? "Hide Password" : "Show Password"}
                  >
                      {showConfirmPassword ? (
                        <IconEye className="h-[20px] w-[20px] size-4 text-gray-500" />
                          ) : (
                        <IconEyeOff className="h-[20px] w-[20px] size-4 text-gray-500" />
                          )}
                  </button>       
            </div>
          </div>
            
      <div className="space-y-1 mt-[-14px] mb-[10px]">
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    strengthColors[Math.min(passwordStrength, 3)]
                      }`}
                    style={{ width: `${(passwordStrength / 4) * 100}%` }}
                  />
              </div>
                <div className="text-sm text-gray-500">
                      Password strength: {['', 'Very Weak', 'Weak', 'Moderate', 'Strong'][Math.min(passwordStrength, 3)]}
                </div>
      </div>

          
              {isError && (
                <p className="text-red-500 text-sm mt-[-8px] mb-[18px]" role="alert">
                  Passwords do not match!
                </p>
            )}

          {successMessage && (
                <p className="text-green-500 text-sm" role="alert">
                  {successMessage}
                </p>
            )}

            
          <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-red-500 text-white py-3 cursor-pointer rounded-lg font-bold hover:bg-red-600 mt-[-2px] ml-[40px]">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          </form>

          </div>

        
        <p className="mt-4 text-m ml-[76px]">
          Already have an account?{" "}
          <Link to="/login" className="text-[#d1a14a] font-bold cursor-pointer">
            Login
          </Link>
        </p>
        

       
        <div className="flex items-center w-80 ml-[80px] mt-2 mb-2">
          <div className="flex-1 h-[0.7px] bg-gray-300" />
          <span className="mx-3 mt-[-4px] text-gray-500">or</span>
          <div className="flex-1 h-[0.7px] bg-gray-300" />
        </div>


     
        <div className="flex space-x-2 mt-[5px] ml-[80px]">
                <p className="text-sm mt-[6px] underline mr-4">Sign Up with </p>
                <div className="flex space-x-[-4px] mb-4">
                  <Link to="/">
                  <FaFacebook className="text-blue-600 h-8 w-8 text-2xl cursor-pointer" />
                  </Link>
                  <Link to="/">
                  <img src={image} className="h-[60px] w-[60px] mt-[-14px]"/>
                  </Link>
                </div>
        </div>
          
        </div>
    </div>
    </div>
    </>
  );
}

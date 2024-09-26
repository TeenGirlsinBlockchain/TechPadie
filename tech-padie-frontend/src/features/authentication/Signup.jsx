// src/RegistrationForm.js
import  { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; 

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate(); 

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordsMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    checkPasswordsMatch(password, newConfirmPassword);
  };

  const checkPasswordsMatch = (pass1, pass2) => {
    setPasswordsMatch(pass1 === pass2);
  };

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (passwordsMatch) {
      // Navigate to EmailVerificationScreen if passwords match
      navigate('/email-verification'); // Adjust the path as necessary
    }
  };

  const handleLoginScreen = () => {
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-center md:min-h-screen md:bg-gray-100 text-start text-[12px] p-4">
      <div className="w-full max-w-md bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
        <div className='text-[12px] mb-4'>It’s time to earn while you learn the fall way.</div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              className="mt-1 block w-full px-3 py-2 bg-[#F8F8F8] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-1 block w-full px-3 py-2 border bg-[#F8F8F8] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative items-center ">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 block w-full px-3 py-2 bg-[#F8F8F8] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 mt-7"
            >
              {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
            </button>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="mt-1 block w-full px-3 py-2 bg-[#F8F8F8] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {!passwordsMatch && (
            <p className="text-red-600 text-sm mb-2">Passwords do not match</p>
          )}
          <div className='mt-4 text-[12px] mb-4'>Note: By signing up, as a user on our platform , <span className='text-[#227FA1]'>you agree to our Terms and conditions.</span></div>
          {/* <div className="flex items-center justify-between mb-4"> */}
            <button
              type="submit"
              disabled={!passwordsMatch}
              onClick={handleSignUp}
              className={`w-full py-2 rounded-md text-white ${passwordsMatch ? 'bg-[#227FA1] hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Get Started
            </button>
            <div className='text-center mt-2'>Already have an account ? <span className='text-[#227FA1] ' onClick={handleLoginScreen}>log in here</span></div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
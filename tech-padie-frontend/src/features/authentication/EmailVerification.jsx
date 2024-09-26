import { useState, useRef } from 'react';

const EmailVerification = () => {
  // Create state to store the value of each pin box
  const [pin, setPin] = useState(['', '', '', '']);
  
  // Create refs for each input field
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Update the pin state
    const newPin = [...pin];
    newPin[index] = value.slice(0, 1); // Allow only one digit per input

    // Move focus to next input if the current input is filled
    if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }

    // Move focus to previous input if the current input is empty
    if (value.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }

    setPin(newPin);
  };

  const handleContinue = () => {
    // Join pin values and check if it's 4 digits long
    const completePin = pin.join('');
    if (completePin.length === 4) {
      alert('PIN verified: ' + completePin);
      // Add your verification logic here
    } else {
      alert('Please enter a 4-digit PIN');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:bg-gray-100 p-4">
      <div className="w-full max-w-sm p-6 bg-white  rounded-lg">
        <h2 className="text-2xl font-[700] text-gray-700 mb-1 text-start text-[24px]">Email Verification</h2>
        <div className='text-start text-[12px] font-[400] mb-14'>We’ve sent you a code to confirm your registration</div>
        <div className="flex justify-between mb-24 items-center">
          {pin.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={pin[index]}
              onChange={(e) => handleChange(e, index)}
              ref={inputRefs[index]}
              className="text-center text-3xl font-bold border-2 border-gray-300 rounded-md w-12 h-12"
              placeholder="-"
            />
          ))}
          <div>56 secs</div>
        </div>
        <button
          onClick={handleContinue}
          className="w-full py-2 px-4 bg-[#227FA1] text-white font-semibold rounded-lg shadow-md hover:bg-[#227FA1]-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
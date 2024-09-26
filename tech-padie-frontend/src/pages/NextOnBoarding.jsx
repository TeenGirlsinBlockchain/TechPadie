import Button from "../components/Button";

function InitialOnBoarding() {
  return (
    <div className="bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-4xl font-semibold text-blue-400">
        More Knowledge
        </h1>
        <p className="text-md mb-4 text-black">
        All in one place
        </p>

        <p className="text-sm text-black mb-4">
        Enjoy super-fast transaction with our wallet based on the solana blockchain ecosystem.
        </p>
        
      </div>
      <Button addedStyles="w-full rounded-md bg-[#227FA1] text-white">Continue</Button> 
    </div>
    
  );
}

export default InitialOnBoarding;
// import { useState } from 'react';
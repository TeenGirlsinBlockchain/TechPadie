// import { useState } from 'react';
import FormFooter from '../components/form/FormFooter';
import Tracker from '../ui/Tracker'

function InitialOnBoarding() {

  return (
      <div className=" bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
        <Tracker height={3} >
          <div className="flex flex-col gap-1">
            <Tracker.Progress color="var(--color-red-700)" />
            <Tracker.Bar color="var(--color-red-700)" />
          </div>
        </Tracker>
        <h1 className="mb-4 text-center text-4xl font-semibold text-black">
        Welcome onboard
        </h1>
       
        <FormFooter
          link="/signup"
          question="Don't have an account?"
          action="Sign Up"
        />
      </div>
  );
}

export default InitialOnBoarding;

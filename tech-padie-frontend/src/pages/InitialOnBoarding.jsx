// import { useState } from 'react';
// import FormFooter from '../components/form/FormFooter';
// import Tracker from '../ui/Tracker'
import Button from "../components/Button";
import ButtonGroup from "../ui/ButtonGroup";
// import ButtonText from "../ui/ButtonText";

function InitialOnBoarding() {
  return (
    <div className="bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-4xl font-semibold text-black">
          Welcome onboard
        </h1>
        <p className="text-md mb-4">
          Let’s get to know you!
        </p>

        <p className="text-sm text-blue-400 mb-4">
        What brings you to Techpadie ?
        </p>
        <ButtonGroup className="mb-4">
        <Button>Learn</Button> 
        <Button>Earn</Button>
        <Button>Community</Button>
      </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">
        Highest level of education ?
        </p>
        <ButtonGroup className="mb-4">
        <Button>Learn</Button> 
        <Button>Earn</Button>
        <Button>Community</Button>
      </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">
        Preferred social media ?
        </p>
        <ButtonGroup className="mb-4">
        <Button>Telegram</Button> 
        <Button>Discord</Button>
        <Button>Twitter X</Button>
      </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">
        Which application mode do you prefer ?
        </p>
        <ButtonGroup className="mb-4">
        <Button>Dark Mode</Button> 
        <Button>Light Mode</Button>
      </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">
        What’s your level of web3;0 experience ?
        </p>
        <ButtonGroup className="mb-8">
        <Button>0-1 year</Button> 
        <Button>2-4 years</Button>
        <Button>5 years above</Button>
      </ButtonGroup>
      </div>
      <Button>Continue</Button> 
    </div>
    
  );
}

export default InitialOnBoarding;

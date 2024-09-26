import { useState } from 'react';
import Button from "../components/Button";
import ButtonGroup from "../ui/ButtonGroup";
import Tracker from "../ui/Tracker";

function InitialOnBoarding() {
 
  const [selectedPurpose, setSelectedPurpose] = useState(""); 
  const [selectedEducation, setSelectedEducation] = useState(""); 
  const [selectedSocial, setSelectedSocial] = useState(""); 
  const [selectedMode, setSelectedMode] = useState(""); 
  const [selectedExperience, setSelectedExperience] = useState("");

  
  const allFieldsCompleted = selectedPurpose && selectedEducation && selectedSocial && selectedMode && selectedExperience;

  return (
    <div className="bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
      <Tracker currtrack={50} height={4} bgcolor="#F1F1F1">
        <Tracker.Bar color="#227FA1" /> 
      </Tracker>

      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-4xl font-semibold text-black">
          Welcome Onboard !
        </h1>
        <p className="text-md mb-4">Let’s get to know you!</p>

        {/* First Group: What brings you to Techpadie? */}
        <p className="text-sm text-blue-400 mb-4">What brings you to Techpadie ?</p>
        <ButtonGroup className="mb-4">
          <Button isActive={selectedPurpose === "Learn"} handleClick={() => setSelectedPurpose("Learn")}>Learn</Button>
          <Button isActive={selectedPurpose === "Earn"} handleClick={() => setSelectedPurpose("Earn")}>Earn</Button>
          <Button isActive={selectedPurpose === "Community"} handleClick={() => setSelectedPurpose("Community")}>Community</Button>
        </ButtonGroup>

        {/* Second Group: Highest level of education */}
        <p className="text-sm text-blue-400 mb-4">Highest level of education ?</p>
        <ButtonGroup className="mb-4">
          <Button isActive={selectedEducation === "High School"} handleClick={() => setSelectedEducation("High School")}>High School</Button>
          <Button isActive={selectedEducation === "Bachelor's"} handleClick={() => setSelectedEducation("Bachelor's")}>Bachelors</Button>
          <Button isActive={selectedEducation === "Master's"} handleClick={() => setSelectedEducation("Master's")}>Masters</Button>
        </ButtonGroup>

        {/* Third Group: Preferred social media */}
        <p className="text-sm text-blue-400 mb-4">Preferred social media ?</p>
        <ButtonGroup className="mb-4">
          <Button isActive={selectedSocial === "Telegram"} handleClick={() => setSelectedSocial("Telegram")}>Telegram</Button>
          <Button isActive={selectedSocial === "Discord"} handleClick={() => setSelectedSocial("Discord")}>Discord</Button>
          <Button isActive={selectedSocial === "Twitter X"} handleClick={() => setSelectedSocial("Twitter X")}>Twitter X</Button>
        </ButtonGroup>

        {/* Fourth Group: Application mode */}
        <p className="text-sm text-blue-400 mb-4">Which application mode do you prefer ?</p>
        <ButtonGroup className="mb-4">
          <Button isActive={selectedMode === "Dark Mode"} handleClick={() => setSelectedMode("Dark Mode")}>Dark Mode</Button>
          <Button isActive={selectedMode === "Light Mode"} handleClick={() => setSelectedMode("Light Mode")}>Light Mode</Button>
        </ButtonGroup>

        {/* Fifth Group: Web3 experience */}
        <p className="text-sm text-blue-400 mb-4">What’s your level of web3.0 experience ?</p>
        <ButtonGroup className="mb-8">
          <Button isActive={selectedExperience === "0-1 year"} handleClick={() => setSelectedExperience("0-1 year")}>0-1 year</Button>
          <Button isActive={selectedExperience === "2-4 years"} handleClick={() => setSelectedExperience("2-4 years")}>2-4 years</Button>
          <Button isActive={selectedExperience === "5 years above"} handleClick={() => setSelectedExperience("5 years above")}>5 years above</Button>
        </ButtonGroup>
      </div>

      {/* Continue Button */}
      <button
        className={`w-full rounded-md px-8 py-2 ${
          allFieldsCompleted
            ? "bg-[#227FA1] text-white"  
            : "bg-gray-300 text-gray-600 cursor-not-allowed" 
        }`}
        disabled={!allFieldsCompleted}>
        Continue
      </button>
    </div>
  );
}

export default InitialOnBoarding;

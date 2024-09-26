import { useState } from 'react';
// import FormFooter from '../components/form/FormFooter';
import Button from "../components/Button";
import ButtonGroup from "../ui/ButtonGroup";
import Tracker from "../ui/Tracker";



function InitialOnBoarding() {
  // Separate state for each question
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);

  return (
    <div className="bg-white p-24 sm:w-[90%] md:w-[70%] lg:w-[50%]">
      <Tracker currtrack={50} height={4} bgcolor="#F1F1F1">
        <Tracker.Bar color="#227FA1" /> {/* Customize the bar color */}
      </Tracker>
      <div className="flex flex-col items-start">
        <h1 className="mb-4 text-4xl font-semibold text-black">
          Welcome onboard
        </h1>
        <p className="text-md mb-4">Let’s get to know you!</p>

        <p className="text-sm text-blue-400 mb-4">What brings you to Techpadie?</p>
        <ButtonGroup className="mb-4">
          <Button
            addedStyles={selectedOption1 === 'Learn' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption1('Learn')}
          >
            Learn
          </Button>
          <Button
            addedStyles={selectedOption1 === 'Earn' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption1('Earn')}
          >
            Earn
          </Button>
          <Button
            addedStyles={selectedOption1 === 'Community' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption1('Community')}
          >
            Community
          </Button>
        </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">Highest level of education?</p>
        <ButtonGroup className="mb-4">
          <Button
            addedStyles={selectedOption2 === 'High School' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption2('High School')}
          >
            High School
          </Button>
          <Button
            addedStyles={selectedOption2 === 'Bachelor\'s' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption2('Bachelor\'s')}
          >
            Bachelors
          </Button>
          <Button
            addedStyles={selectedOption2 === 'Master\'s' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption2('Master\'s')}
          >
            Masters
          </Button>
        </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">Preferred social media?</p>
        <ButtonGroup className="mb-4">
          <Button
            addedStyles={selectedOption3 === 'Telegram' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption3('Telegram')}
          >
            Telegram
          </Button>
          <Button
            addedStyles={selectedOption3 === 'Discord' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption3('Discord')}
          >
            Discord
          </Button>
          <Button
            addedStyles={selectedOption3 === 'Twitter X' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption3('Twitter X')}
          >
            Twitter X
          </Button>
        </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">Which application mode do you prefer?</p>
        <ButtonGroup className="mb-4">
          <Button
            addedStyles={selectedOption4 === 'Dark Mode' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption4('Dark Mode')}
          >
            Dark Mode
          </Button>
          <Button
            addedStyles={selectedOption4 === 'Light Mode' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption4('Light Mode')}
          >
            Light Mode
          </Button>
        </ButtonGroup>

        <p className="text-sm text-blue-400 mb-4">What’s your level of web3 experience?</p>
        <ButtonGroup className="mb-8">
          <Button
            addedStyles={selectedOption5 === '0-1 year' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption5('0-1 year')}
          >
            0-1 year
          </Button>
          <Button
            addedStyles={selectedOption5 === '2-4 years' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption5('2-4 years')}
          >
            2-4 years
          </Button>
          <Button
            addedStyles={selectedOption5 === '5 years above' ? 'bg-[#227FA1] text-white' : ''}
            handleClick={() => setSelectedOption5('5 years above')}
          >
            5 years above
          </Button>
        </ButtonGroup>
      </div>
      <Button addedStyles="w-full rounded-md bg-[#227FA1] text-white">Continue</Button>
    </div>
  );
}
export default InitialOnBoarding;

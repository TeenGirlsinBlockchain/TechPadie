import ButtonIcon from "../ui/ButtonIcon";
import Tracker from "../ui/Tracker";
import ellipsebg from '../images/ellipsebg.png';
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'



function NextOnBoarding() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div
        className="sm:w-[90%] md:w-[70%] lg:w-[50%] rounded-t-3xl p-24 px-28 py-20" 
        style={{
          backgroundImage: `url(${ellipsebg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Tracker currtrack={50} height={4} bgcolor="#F1F1F1">
          <Tracker.Bar color="#227FA1" />
        </Tracker>
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-4xl font-semibold text-blue-400">
            More Knowledge
          </h1>
          <p className="text-xl font-semibold text-black">All in one place</p>
          <p className="text-sm text-black">
            Enjoy super-fast transaction with our wallet based on the Solana blockchain ecosystem.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-8 mb-8">
          <img src={img1} alt="Image 1" className="" /> 
          <img src={img2} alt="Image 2" className="" />
          <img src={img3} alt="Image 3" className="" />
        </div>
        <ButtonIcon>Continue</ButtonIcon> 
      </div>
    </div>
  );
}

export default NextOnBoarding;

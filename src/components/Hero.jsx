import React from "react";
import hero from "../images/illustration-working.svg";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row-reverse md:justify-center items-center md:mt-16 w-full h-auto">
			<div className="md:w-[50%] md:pl-32">
				<img className="" src={hero} alt="hero image" />
			</div>
			<div className="flex flex-col justify-center items-center md:items-start mt-8 md:mt-0 md:px-32 md:w-[50%] ">
				<h1 className="text-neutralVeryDarkViolet font-extrabold text-[2.5rem] md:text-[3.5rem] text-center md:text-start  leading-[3.2rem] md:leading-[4rem]">More than just <br/> shorter links</h1>
				<p className="text-neutralGrayishViolet font-medium text-[1.1rem] text-center md:text-start mx-8 mt-4 md:mx-0 md:pr-4">Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
				<button className="bg-primaryCyan py-4 px-12 rounded-[2rem] text-[#fff] text-[1.2rem] font-medium mt-8">Get Started</button>
			</div>
		</div>
	);
};

export default Hero;

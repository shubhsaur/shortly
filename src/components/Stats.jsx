import React from "react";
import iconBR from "../images/icon-brand-recognition.svg";
import iconDR from "../images/icon-detailed-records.svg";
import iconFC from "../images/icon-fully-customizable.svg";

const Stats = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-auto bg-neutralGray pb-20">
			<div className="flex flex-col justify-center items-center w-[80%] mb-16 gap-4">
				<h2 className="text-neutralVeryDarkViolet text-[1.8rem] md:text-[2.2rem] font-bold">Advanced Statistics</h2>
				<p className="text-neutralGrayishViolet text-center md:w-[40%]">
					Track how your links are performing across the web with our advanced statistics dashboard.
				</p>
			</div>
			<div className="w-full md:w-[80%] md:pb-16 flex flex-col md:flex-row justify-center items-center">
				<div className="bg-[#fff] w-[80%] flex flex-col justify-center items-center py-4 rounded-md">
					<div className="bg-primaryViolet w-[70px] h-[70px] rounded-[50%] flex justify-center items-center -translate-y-[60%]">
						<img src={iconBR} alt="brand recognition icon" />
					</div>
					<h2 className="text-neutralVeryDarkViolet text-[1.4rem] font-bold">Brand Recognition</h2>
					<p className="text-neutralGrayishViolet text-center text-[0.9rem] px-8 py-4">
						Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</div>

                <div className="flex flex-col justify-center items-center bg-primaryCyan w-[8px] h-[6rem] md:w-[8rem] md:h-[8px] "></div>

				<div className="bg-[#fff] w-[80%] flex flex-col justify-center items-center py-4 rounded-md md:translate-y-8">
					<div className="bg-primaryViolet w-[70px] h-[70px] rounded-[50%] flex justify-center items-center -translate-y-[60%]">
						<img src={iconDR} alt="brand recognition icon" />
					</div>
					<h2 className="text-neutralVeryDarkViolet text-[1.4rem] font-bold">Detailed Records</h2>
					<p className="text-neutralGrayishViolet text-center text-[0.9rem] px-8 py-4">
						Gain insights into who is clicking your links. Knowing when and where people engage with your content helps
						inform better decisions.
					</p>
				</div>

                <div className="flex flex-col justify-center items-center bg-primaryCyan w-[8px] h-[6rem] md:w-[8rem] md:h-[8px] "></div>


				<div className="bg-[#fff] w-[80%] flex flex-col justify-center items-center py-4 rounded-md md:translate-y-16">
					<div className="bg-primaryViolet w-[70px] h-[70px] rounded-[50%] flex justify-center items-center -translate-y-[60%]">
						<img src={iconFC} alt="brand recognition icon" />
					</div>
					<h2 className="text-neutralVeryDarkViolet text-[1.4rem] font-bold">Fully Customizable</h2>
					<p className="text-neutralGrayishViolet text-center text-[0.9rem] px-8 py-4">
						Improve brand awareness and content discoverability through customizable links, supercharging audience
						engagement.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Stats;

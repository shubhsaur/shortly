import React from "react";
import shortenBG from "../images/bg-shorten-mobile.svg";
import axios from "axios";

const Shorten = () => {
	const [input, setInput] = React.useState("");
	const [data, setData] = React.useState([]);
	const [clicked, setClicked] = React.useState(false);
	const [isAvailable, setIsAvailable] = React.useState(false);

	const fetchUrl = async (input) => {
		const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`);
		const result = await response.data;
		setData([
			...data,
			{
				input: input,
				shorten: result.result.full_short_link,
			},
		]);

		setIsAvailable(true);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const copyUrl = (url) => {
		navigator.clipboard.writeText(url);
		setClicked(true);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full h-auto bg-neutralGray mt-48">
			<div className="w-[80%] rounded-lg -translate-y-[50%] shortly-bg">
				<div className="flex flex-col md:flex-row md:gap-8 md:px-16 justify-center items-center mt-8 pb-8">
					<input
						className="p-4 rounded-md w-[90%] md:w-[85%]"
						type="text"
						value={input}
						onChange={handleInput}
						name="shorten"
						placeholder="Shorten a link here..."
					/>
					<button
						className="bg-primaryCyan w-[90%] md:w-[15%] py-3 rounded-md text-[#fff] text-[1.2rem] font-medium mt-8 md:mt-0"
						onClick={() => fetchUrl(input)}
					>
						Shorten it!
					</button>
				</div>
			</div>
			{isAvailable && (
				<div className="w-[80%] flex flex-col justify-center gap-8 items-center mb-8">
					{data.map((url, index) => (
						<div className="bg-[#fff] w-full flex flex-col md:flex-row justify-center items-center py-4 rounded-md md:px-16" key={index}>
							<h2 className="text-neutralVeryDarkViolet font-bold text-[1.2rem] md:w-[60%]">{url.input}</h2>
							<div className="w-full bg-neutralGrayishViolet h-[1px] my-4 md:hidden"></div>
							<h2 className="text-primaryCyan font-bold text-[1.2rem] md:w-[30%]">{url.shorten}</h2>
							<button
								className={
									clicked
										? "bg-primaryViolet w-[90%] md:w-[10%] py-3 rounded-md text-[#fff] text-[1.2rem] font-medium mt-8 md:mt-0"
										: "bg-primaryCyan w-[90%] md:w-[10%] py-3 rounded-md text-[#fff] text-[1.2rem] font-medium mt-8 md:mt-0"
								}
								onClick={() => copyUrl(url.shorten)}
							>
								{clicked ? "Copied!" : "Copy"}
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Shorten;

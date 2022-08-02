import React from "react";
import logo from "../images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="flex md:justify-start justify-between items-center p-8 md:px-32 ">
			<div>
				<img src={logo} alt="Shortly logo" />
			</div>

			<nav
				className={
					isOpen ? "flex absolute top-[80px] right-[50px] bg-primaryViolet w-[300px] h-[400px] rounded-lg z-999" : "hidden md:flex flex-row justify-between items-center w-full"
				}
			>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 w-full text-[#fff] md:text-neutralGrayishViolet text-lg">
					<ul className="list-none flex flex-col justify-center items-center md:flex-row gap-8 mt-8 md:mt-0 md:pl-16">
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Resources</a>
						</li>
					</ul>

					<div className="md:hidden h-[1px] w-full bg-neutralGray"></div>

					<ul className="list-none flex flex-col md:flex-row justify-center items-center gap-8">
						<li>
							<a href="#">Log in</a>
						</li>
						<li className="bg-primaryCyan py-2 px-8 rounded-lg md:text-[#fff]">
							<a href="#">Sign up</a>
						</li>
					</ul>
				</div>
			</nav>

			<div className="menu sm:hidden">
				<AiOutlineMenu onClick={handleMenu} />
			</div>
		</div>
	);
};

export default Navbar;

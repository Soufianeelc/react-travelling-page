import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi"

function ListItem({content}) {
	return (
		<li className="uppercase font-graphikRegular"> {content} </li>
	);
}

function NavBar(){

	return (
		<nav className="hidden md:flex justify-center mt-8 px-6 py-2 rounded-md">
			<ul className="flex items-center space-x-16 text-white">
				<ListItem content="Journal" />
				<ListItem content="Explore" />

				<FaLocationArrow color="white"/>

				<ListItem content="Journal" />
				
				<button className="flex items-center space-x-2">
					<BiSearchAlt2 />
					<ListItem content="Search" />
				</button>
			</ul>
		</nav>
	);
}

export default NavBar;

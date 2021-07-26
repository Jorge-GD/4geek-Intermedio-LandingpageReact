import React from "react";
import Navbar from "react-bootstrap/Navbar";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import AboutUs from "./aboutUs.jsx";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<AboutUs />
		</div>
	);
}

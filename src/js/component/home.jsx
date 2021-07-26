import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import Ricardo's Carousel component
import { Navbrb } from "./navbrb.jsx";
import NewCarouselRicardo from "./newCarouselRicardo.jsx";
import Carta from "./carta.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Navbrb/>
			<NewCarouselRicardo />
			<Carta />
		</div>
	);
}

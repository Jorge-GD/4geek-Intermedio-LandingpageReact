import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//import Ricardo's Carousel component
import NewCarouselRicardo from "./newCarouselRicardo.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<NewCarouselRicardo />
		</div>
	);
}

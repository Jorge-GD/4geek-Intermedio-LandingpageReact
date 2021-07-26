//Ricardo's Carousel component
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const NewCarouselRicardo = () => {
	return (
		<Carousel fade>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://i.ibb.co/gM43SDS/img1.png"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Meet Bryan</h3>
					<p>
						He is really kind with people, enjoys company all the
						time and behaves very well. 🐕
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://i.ibb.co/JmnRvZL/img3.png"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>Meet Jorge</h3>
					<p>
						Jorge (the middle one) was abandoned by his previous
						owners with his 2 siblings and is now looking for his
						forever home. 🐹
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://i.ibb.co/HDg279y/img2.png"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>Meet Yevhen</h3>
					<p>
						He was rescued from a construction site where he ate
						remains of food from the garbage. 🐈
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default NewCarouselRicardo;

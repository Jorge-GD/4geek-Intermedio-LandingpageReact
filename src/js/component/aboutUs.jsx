import React from "react";

const AboutUs = () => {
	return (
		<div className="about-us">
			<div className="container">
				<header className="myHeader">
					<h1>We are Pet Lovers Trying to Make a Difference</h1>
				</header>
				<section className="desription">
					<div className="first-paragraph">
						<p className="first">
							Our small staff answered the call to volunteer in
							the massive effort to save pets stranded in and
							around New Orleans by hurricane Katrina and the
							flooding that followed, and we co-led the entire
							rescue effort for months. Check out our Hurricane
							Katrina blog. We have also helped in the other
							emergency pet rescue efforts, most recently
							providing coordination and new technologies to help
							people and their animals affected by Hurricanes
							Harvey and Irma. If you like what we do and want to
							help save shelter pets, visit our get involved page.
							For our financial and other organizational
							information, visit here.
						</p>
					</div>
					<div className="second-paragraph">
						<p>
							We use the power of the Internet to connect adopters
							with shelter pets and help pets go from alone to
							adopted. We are working to help the good people at
							shelters and rescue groups find homes for their
							pets. But we do not stop there. We also provide
							useful and informative information on the
							human/companion animal relationship to help keep
							pets healthy and permanently in their loving homes.
							Our blog has articles, and our YouTube channel has
							useful pet training as well as entertaining videos,
							all produced by our expert staff of professionals in
							animal training and behavior, as well as human
							psychology.
						</p>
					</div>
					<div className="theButton">
						<button
							type="button"
							className="btn btn-secondary"
							id="myButton"
							href="#">
							Learn more about places
						</button>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutUs;

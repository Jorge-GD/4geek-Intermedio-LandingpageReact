//Cards....
import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carta = () => {
	return (
		<CardGroup>
			<Card border="success">
				<Card.Img
					variant="top"
					src="http://www.animalesextremos.com/Imagenes/razas-de-perros-mas-bonitos-del-mundo-pastor-aleman.jpg"
				/>
				<Card.Body>
					<Card.Title>Dogs in adoption</Card.Title>
					<Card.Text>
						In this section you can see all our dogs that we have
						for immediate adoption.
					</Card.Text>
					<Button variant="success">Click Here</Button>{" "}
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</Card.Footer>
			</Card>
			<Card border="success">
				<Card.Img
					variant="top"
					src="https://i.pinimg.com/originals/9c/98/bc/9c98bca2cc2f75d24d96f5813c737fda.jpg"
				/>
				<Card.Body>
					<Card.Title>Rabbits in adoption</Card.Title>
					<Card.Text>
						In this section you can see all our rabbits that we have
						for immediate adoption.
					</Card.Text>
					<Button variant="success">Click Here</Button>{" "}
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">
						Last updated 5 days ago
					</small>
				</Card.Footer>
			</Card>
			<Card border="success">
				<Card.Img
					variant="top"
					src="https://images8.alphacoders.com/421/421928.jpg"
				/>
				<Card.Body>
					<Card.Title>Cats in adoption</Card.Title>
					<Card.Text>
						In this section you can see all our cats that we have
						for immediate adoption.
					</Card.Text>
					<Button variant="success">Click Here</Button>{" "}
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">
						Last updated 8 hours ago
					</small>
				</Card.Footer>
			</Card>
		</CardGroup>
	);
};

export default Carta;
//Cards.....

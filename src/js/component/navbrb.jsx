import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
export function Navbrb() {
	return (
		<Navbar collapseOnSelect expand="lg" variant="dark" className="myNav">
			<Container className="m-1 justify-content-end ">
				<Navbar.Brand href="#home">
					<img
						src="https://images.squarespace-cdn.com/content/v1/5984da00cd0f685f369c47f7/1523397462966-WVM4U7L2JSYYVBL6PQH7/PIN_Logo_v3-06.png"
						width="200"
						height="100"
						className="d-inline-block align-top"
						alt="Logo"
					/>
				</Navbar.Brand>

				<Navbar.Brand href="#home">Pets in Need</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto ">
						<Nav.Link href="#Nuestracasa">Nuestra casa</Nav.Link>
						<Nav.Link href="#donaciones">Donaciones</Nav.Link>
						<NavDropdown
							title="Bienes Materiales"
							id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Adoptar
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Comprar articulos
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Vender articulos
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="http://www.ont.es/informacion/Paginas/TarjetadeDonante.aspx">
								Venta de organos
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

import { React, useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";

function NavbarW(args) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar {...args} expand="sm" position="sticky">
				<NavbarBrand href="/" className="brand__outer">
					<img
						src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_60,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_60/oziexidemdusplhs0uxy"
						alt="brand-logo"
					/>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink
								href="https://ordering.chownow.com/order/26927/locations"
								target="_blank"
							>
								Order Now
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								href="https://www.ubereats.com/store/gigis-cafe-and-bakery/K_JiaT8DSrKjC74wC5FyjQ"
								target="_blank"
							>
								Uber Eats
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								href="https://www.grubhub.com/restaurant/gigis-bakery--cafe-2200-temple-st-los-angeles/2075700"
								target="_blank"
							>
								Grubhub
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/menu/">Menu</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/sandwiches/">Sandwiches</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/specialties/">Specialties</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/bakery/">Bakery</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/cafe/">Café</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact/">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavbarW;

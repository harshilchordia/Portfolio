import React from "react";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Harshil Chordia</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="first"> About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="second"> Discover</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="third"> Contact Me</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;

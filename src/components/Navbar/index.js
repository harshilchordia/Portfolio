import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavIMG,
} from "./NavbarElements";

import h_logo from "../../Images/H_logo.png";

const Navbar = ({ toggle }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavItem>
						<NavLogo to="/" onClick={toggleHome}>
							<NavIMG src={h_logo} alt="" />
						</NavLogo>
					</NavItem>

					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Projects
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="second"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Discover
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="third"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
							>
								Contact Me
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;

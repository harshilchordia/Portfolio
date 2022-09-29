import "./index.scss";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

import h_logo from "../../Images/H_logo.png";

import { HashLink } from "react-router-hash-link";

const Navbar = ({ toggle }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<nav className="navContainer">
			<div className="navWrapper">
				<li>
					<LinkR to="/" onClick={toggleHome} className="navLogo">
						<img src={h_logo} alt="" />
					</LinkR>
				</li>

				<div onClick={toggle} className="mobileIcon">
					<FaBars />
				</div>
				<ul>
					<li>
						<div className="navLinks">
							<LinkScroll
								to="skills"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
								activeClass="active"
							>
								Skills
							</LinkScroll>
						</div>
					</li>
					<li>
						<div className="navLinks">
							<LinkScroll
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
								activeClass="active"
							>
								Projects
							</LinkScroll>
						</div>
					</li>
					<li>
						<div className="navLinks">
							<LinkScroll
								to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exact="true"
								offset={-80}
								activeClass="active"
							>
								Contact
							</LinkScroll>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

import React, { useState, useEffect } from "react";
import "./index.scss";

import { Link } from "react-scroll";

import Button from "../Button";
import LinkedIn from "../../Images/linkedin.png";
import Github from "../../Images/github.png";

import AnimatedLetters from "../AnimatedLetters";

const HeroSection = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = [" ", "H", "a", "r", "s", "h", "i", "l", "."];
	const jobArray = ["I", " ", "w", "r", "i", "t", "e", " ", "c", "o", "d", "e", "."];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);

	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};
	return (
		<div className="HeroContainer" id="hero">
			<div className="LeftBox">
				<div className="HeroContent">
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>e</span>
						<span className={`${letterClass} _12`}>y,</span>
						<br />
						<span className={`${letterClass} _13`}>I</span>
						<span className={`${letterClass} _14`}>'m</span>

						{/* <img src={LogoH} alt="logo" /> */}
						<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
						<br />
						<AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
					</h1>
					<p>Frontend / Backend / Designer</p>
					<div className="HeroBtnWrapper">
						{/* <Button> */}
						<Link
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							primary="true"
							dark="true"
							to="contact"
							smooth={true}
							duration={1500}
							spy={true}
							exact="true"
							offset={-80}
							className="button"
						>
							Say Hello
						</Link>
						{/* </Button>  */}
					</div>
				</div>
			</div>
			<div className="RightBox">
				<div className="HeroLinks">
					<a className="iconLink" href="https://github.com/harshilchordia/" target="_blank">
						<img src={Github} alt="" />
					</a>
					<a
						className="iconLink"
						href="https://www.linkedin.com/in/harshilchordia/"
						target="_blank"
					>
						<img src={LinkedIn} alt="" />
					</a>
					{/* <a className="iconLink" href="#projects">
						<img src={ProjectIcon} alt="" />
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

import React, { useState, useEffect } from "react";
import {
	HeroContainer,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	LeftBox,
	RightBox,
	HeroLinks,
} from "./HeroElements";
import { Button } from "../ButtonElement";

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
		<HeroContainer id="hero">
			<LeftBox>
				<HeroContent>
					<HeroH1>
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
					</HeroH1>
					<HeroP>Frontend / Backend / Designer</HeroP>
					<HeroBtnWrapper>
						<Button
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
						>
							Say Hello
						</Button>
					</HeroBtnWrapper>
				</HeroContent>
			</LeftBox>
			<RightBox>
				<HeroLinks>
					<a className="button" href="https://github.com/harshilchordia/" target="_blank">
						Github
					</a>
					<br />
					<br />
					<a className="button" href="https://www.linkedin.com/in/harshilchordia/" target="_blank">
						LinkedIn
					</a>
				</HeroLinks>
			</RightBox>
		</HeroContainer>
	);
};

export default HeroSection;

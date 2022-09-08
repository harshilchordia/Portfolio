import React, { useState, useEffect } from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from "./HeroElements";
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
				<HeroP>Frontend / Backend / Everything</HeroP>
				<HeroBtnWrapper>
					<Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
						Say Hello
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;

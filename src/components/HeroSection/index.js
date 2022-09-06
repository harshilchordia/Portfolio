import React, { useState } from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper } from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};
	return (
		<HeroContainer>
			<HeroContent>
				<HeroH1>Hi, I am Harshil</HeroH1>
				<HeroP>other thingss...</HeroP>
				<HeroBtnWrapper>
					<Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
						First Button
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;

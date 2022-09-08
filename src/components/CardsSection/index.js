import React from "react";
import Icon1 from "../../Images/eyegazeKeyboard.png";
import Icon2 from "../../Images/buildingwebsite.svg";
import Icon3 from "../../Images/buildingwebsite.svg";

import {
	CardsContainer,
	CardsH1,
	CardsWrapper,
	Cards,
	CardsIcon,
	CardsH2,
	CardsP,
} from "./CardsSectionElements";
const CardsSection = () => {
	return (
		<CardsContainer id="projects">
			<CardsH1> Projects</CardsH1>
			<CardsWrapper>
				<Cards>
					<CardsIcon src={Icon1} />
					<CardsH2>Eye Gaze Keyboard</CardsH2>
					<CardsP>Eye gaze detection keyboard is amazing application i have made </CardsP>
				</Cards>
				<Cards>
					<CardsIcon src={Icon2} />
					<CardsH2>Virtual sdf</CardsH2>
					<CardsP>another on keyboard is hello amazing application i have made </CardsP>
				</Cards>
				<Cards>
					<CardsIcon src={Icon3} />
					<CardsH2>Third Card Keyboard</CardsH2>
					<CardsP> Thirdd asdfasd etection keyboard is amazing application i have made </CardsP>
				</Cards>
				<Cards>
					<CardsIcon src={Icon3} />
					<CardsH2>Third Card Keyboard</CardsH2>
					<CardsP> Thirdd asdfasd etection keyboard is amazing application i have made </CardsP>
				</Cards>
			</CardsWrapper>
		</CardsContainer>
	);
};

export default CardsSection;

import React from "react";
import Icon1 from "../../Images/eyegazeKeyboard.png";
import "./index.css";

import {
	CardsContainer,
	CardsH1,
	CardsWrapper,
	Cards,
	CardsIcon,
	CardsH2,
	CardsP,
} from "./CardsSectionElements";

import { motion } from "framer-motion";
import { useState } from "react";

const CardsSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<CardsContainer id="projects">
			<CardsH1> Projects</CardsH1>
			<CardsWrapper>
				<Cards
					as={motion.div}
					transition={{ layout: { duration: 0.1, type: "spring" } }}
					layout
					onClick={() => setIsOpen(!isOpen)}
					style={{ borderRadius: "1rem", boxShadow: "0 12px 33px rgba(56, 66, 65, 0.125)" }}
				>
					<CardsIcon src={Icon1} as={motion.img} layout />
					<CardsH2 as={motion.h1} layout>
						Eye Gaze Keyboard
					</CardsH2>
					<CardsP as={motion.p} layout>
						Eye gaze detection keyboard is amazing application i have made
					</CardsP>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							className="bigCard"
						>
							<CardsP as={motion.p}>
								expanded content expanded content expanded contentexpanded content expanded content
								expanded content expanded content expanded content expanded content expanded content
								expanded content expanded content expanded content expanded content expanded content
								expanded content expanded content expanded content expanded content expanded content
								expanded content expanded content expanded content expanded content
							</CardsP>
						</motion.div>
					)}
				</Cards>
				{/* <Cards>
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
				</Cards> */}
			</CardsWrapper>
		</CardsContainer>
	);
};

export default CardsSection;

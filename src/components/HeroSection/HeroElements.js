import styled from "styled-components";
import Colors from "../../colors";

export const HeroContainer = styled.div`
	background: ${Colors.background};
	display: flex;
	justify-content: left;
	align-items: center;
	padding: 0 200px;
	min-height: calc(100vh - 80px);
	position: relative;
	z-index: 1;
	/* border: 4px solid red; */
	@media screen and (max-width: 768px) {
		padding: 80px;
	}

	@media screen and (max-width: 450px) {
		padding: 20px;
	}
`;

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: left;
	margin-left: 2vw;
	/* border: 4px solid yellow; */
`;

export const HeroH1 = styled.h1`
	color: ${Colors.font_1};
	font-size: 35px;
	transform-style: preserve-3d;
	animation: fadeIn 1s forwards;
	animation-delay: 1s;
	font-family: "Coolvetica Rg";
	letter-spacing: 2.5px;
	padding: 0;

	@media screen and (max-width: 768px) {
		font-size: 30px;
	}

	@media screen and (max-width: 480px) {
		font-size: 25px;
	}
`;

export const HeroP = styled.p`
	color: ${Colors.font_2};
	margin-top: 12px;
	font-size: 15px;
	font-weight: 100;
	/* max-width: 600px; */
	animation: fadeIn 4s 1.4s backwards;
	letter-spacing: 3px;

	@media screen and (max-width: 768px) {
		font-size: 15px;
	}

	@media screen and (max-width: 480px) {
		font-size: 12px;
	}
`;

export const HeroBtnWrapper = styled.div`
	margin-top: 32px;
	max-width: 124px;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border: 4px solid green; */
`;

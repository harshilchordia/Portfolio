import styled from "styled-components";
import Colors from "../../colors";

export const HeroContainer = styled.div`
	background: ${Colors.background};
	display: flex;
	flex-direction: row;
	width: 100%;
	min-height: calc(100vh - 80px);
	@media screen and (max-width: 768px) {
		/* padding: 80px; */
	}

	@media screen and (max-width: 450px) {
		flex-direction: column;
		padding: 150px 0px;
	}
	/* border: 4px solid red; */
`;
export const LeftBox = styled.div`
	/* border: 4px solid yellow; */
	width: 50%;
	/* margin: auto; */
	align-items: center;
	display: flex;
	padding-bottom: 50px;
	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;
export const RightBox = styled.div`
	/* border: 4px solid green; */
	width: 50%;
	/* margin: auto; */
	align-items: center;
	display: flex;
	padding-bottom: 50px;
	@media screen and (max-width: 450px) {
		width: 100%;
	}
`;
export const HeroContent = styled.div`
	/* border: 4px solid purple; */
	margin: auto;
`;

export const HeroLinks = styled.div`
	/* border: 4px solid green; */
	margin: auto;
	padding: 80px;
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

import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import Colors from "../../colors";

export const Nav = styled.nav`
	background: ${Colors.background};
	height: 80px;
	/* margin-top: -80px; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1 rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1350px;
`;

export const NavLogo = styled(LinkR)`
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 0px;
	font-weight: bold;
	text-decoration: none;
	margin-top: 20px;
`;

export const NavIMG = styled.img`
	width: 50px;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.6rem;
		cursor: pointer;
		color: ${Colors.font_1};
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	font-size: 20px;
	list-style-type: none;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	list-style-type: none;
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	color: ${Colors.font_1};
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
	&.active {
		color: ${Colors.highlight};
	}
`;

import styled from "styled-components";
import { Link } from "react-scroll";
import Colors from "../colors.js";

export const Button = styled(Link)`
	/* background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
	color: ${({ dark }) => (dark ? "#010606" : "#fff")};

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
	} */

	border-radius: 10px;
	background: ${({ dark }) => (dark ? "transparent" : "#010606")};

	white-space: nowrap;
	padding: ${({ big }) => (big ? "12px 30px" : "10px 15px")};
	font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
	outline: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	color: ${Colors.button_text_hover};
	font-weight: 500;
	letter-spacing: 3px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
		Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	border: 1.5px solid ${Colors.button_border};
	animation: fadeIn 2s 2s backwards;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: ${Colors.button_color};
	}
`;

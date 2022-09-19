import React from "react";
import "./index.scss";

import { FaTimes } from "react-icons/fa";

import { Link as LinkS } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<aside
				className={isOpen ? "sidebarContainer open" : "sidebarContainer closed"}
				onClick={toggle}
			>
				<div className="icon" onClick={toggle}>
					<FaTimes className="closeIcon" />
				</div>
				<div className="sidebarWrapper">
					<ul>
						<LinkS className="sidebarLinks" to="skills" onClick={toggle}>
							Skills
						</LinkS>
						<LinkS className="sidebarLinks" to="projects" onClick={toggle}>
							Projects
						</LinkS>
						<LinkS className="sidebarLinks" to="contact" onClick={toggle}>
							Contact
						</LinkS>
					</ul>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;

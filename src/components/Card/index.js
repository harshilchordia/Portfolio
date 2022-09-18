import Card from "./Card";

import React from "react";
import "./index.css";

import { properties } from "./data";

const Projects = () => {
	return (
		<>
			<div className="projectWrapper" id="projects">
				<h1>Projects</h1>
				<div className="properties">
					{properties.map((item) => (
						<Card data={item} key={item.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;

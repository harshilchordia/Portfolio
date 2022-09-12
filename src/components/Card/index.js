import Card from "./Card";

import React from "react";

import { properties } from "./data";

const Projects = () => {
	return (
		<>
			<div className="cardWrapper">
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

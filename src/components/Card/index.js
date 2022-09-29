import Card from "./Card";

import React, { useState, useEffect } from "react";

import "./index.scss";

import { properties } from "./data";
import AnimatedLetters from "../AnimatedLetters";

const Projects = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);
	return (
		<>
			<div className="projectWrapper" id="projects">
				<h1 id="projectss1">
					<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
				</h1>
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

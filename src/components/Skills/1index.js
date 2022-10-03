import "./index.scss";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

import { Carousel } from "antd";

const contentStyle = {
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

const Skills = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = ["S", "k", "i", "l", "l", "s"];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);

	const langauges = ["Python", "Java", "JavaScript", "PHP", "HTML", "CSS", "Sass"];
	return (
		<div className="skillContainer" id="skills">
			{/* // 	<h1>
		// 		<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
		// 	</h1>
			<div className="skillContent"> */}{" "}
			<Carousel dotPosition={"left"}>
				<div>
					<h3 style={{}}>1</h3>
				</div>
				<div>
					<h3 style={{}}>2</h3>
				</div>
			</Carousel>
			{/* <div className="column1">
					<h3>Languages</h3>
					{langauges.map((item) => {
						return (
							<>
								{item} <br />
							</>
						);
					})}
				</div>
				<div className="column2">
					<h3>Frameworks</h3>
					React
					<br />
				</div>
				<div className="column3">
					<h3>Tools</h3>
				</div> */}
			{/* </div> */}
		</div>
	);
};

export default Skills;

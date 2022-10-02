import "./index.scss";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";

const Skills = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = ["S", "k", "i", "l", "l", "s"];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);
	return (
		<div className="skillContainer" id="skills">
			<h1>
				<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
			</h1>
			<div className="skillContent">
				<div className="column1">
					<h3>Languages</h3>
					Python
					<br />
					Java
					<br />
					JavaScript
					<br />
				</div>
				<div className="column2">
					<h3>Frameworks</h3>
					React
					<br />
				</div>
				<div className="column3">
					<h3>Tools</h3>
				</div>

				{/* <div className="table">
				<table>
					<tbody>
						<tr>
							<th>Languages</th>
							<th>Frameworks</th>
							<th>Tools</th>
						</tr>
						<tr>
							<td>Python</td>
							<td>React</td>
						</tr>
						<tr>
							<td>Java</td>
						</tr>
					</tbody>
				</table>
			</div> */}
			</div>
		</div>
	);
};

export default Skills;

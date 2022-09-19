import "./index.scss";
import React from "react";

const Skills = () => {
	return (
		<div className="skillContainer" id="skills">
			<h1>Skills</h1>
			<div className="table">
				<table>
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
				</table>
			</div>
		</div>
	);
};

export default Skills;

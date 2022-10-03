import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState, useEffect } from "react";

const Skills = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const nameArray = ["S", "k", "i", "l", "l", "s"];

	useEffect(() => {
		setTimeout(() => {
			return setLetterClass("text-animate-hover");
		}, 4000);
	}, []);
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const langauges = ["Python", "Java", "JavaScript", "PHP", "HTML", "CSS", "Sass"];

	const sx_Tabs = {
		color: " #521707",
		textTransform: "none",
		fontWeight: 900,
		fontSize: "16px",
		fontFamily: [
			'"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", "Arial", "sans-serif"',
		].join(","),
		"&:hover": {
			color: "#450808",
			opacity: 0.9,
		},
	};
	return (
		<div className="skillContainer" id="skills">
			<h1>
				<AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
			</h1>
			<div className="skillContent">
				<Box>
					<TabContext value={value}>
						<Box sx={{ borderLeft: 3, borderColor: "divider" }} className="titles">
							<TabList
								onChange={handleChange}
								textColor="inherit"
								indicatorColor="secondary"
								centered
								orientation="vertical"
								TabIndicatorProps={{ style: { background: "#b85303" } }}
							>
								<Tab label="Languages" value="1" sx={sx_Tabs} />
								<Tab label="Framework" value="2" sx={sx_Tabs} />
								<Tab label="Tools" value="3" sx={sx_Tabs} />
							</TabList>
						</Box>
						<div className="textPanel">
							<TabPanel value="1">
								{langauges.map((item) => {
									return (
										<>
											<p>
												{item} <br />
											</p>
										</>
									);
								})}
							</TabPanel>
							<TabPanel value="2">React</TabPanel>
							<TabPanel value="3">Panel three</TabPanel>
						</div>
					</TabContext>
				</Box>
			</div>
		</div>
	);
};

export default Skills;

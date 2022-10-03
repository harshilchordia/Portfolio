import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, { useState, useEffect } from "react";

import language_icon from "../../Images/programming_languages.png";
import framework_icon from "../../Images/framework.png";
import tools_icon from "../../Images/tools.png";

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

	const langauges = ["Python", "Java", "JavaScript", "SQL", "PHP", "HTML", "CSS", "Sass"];
	const frameworks = ["React JS", "WordPress"];
	const tools = ["Bash", "Git & Github", "Firebase"];

	const sx_Tabs = {
		color: " #521707",
		textTransform: "none",
		fontWeight: 900,
		fontSize: "16px",
		alignItems: "right",
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
				<div className="tab_container">
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
									<Tab
										label="Languages"
										value="1"
										sx={sx_Tabs}
										icon={<img src={language_icon} style={{ width: "50px" }} />}
										iconPosition="start"
									/>
									<Tab
										label="Framework"
										value="2"
										sx={sx_Tabs}
										icon={<img src={framework_icon} style={{ width: "50px" }} />}
										iconPosition="start"
									/>
									<Tab
										label="Tools"
										value="3"
										sx={sx_Tabs}
										icon={<img src={tools_icon} style={{ width: "50px" }} />}
										iconPosition="start"
									/>
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
								<TabPanel value="2">
									{frameworks.map((item) => {
										return (
											<>
												<p>
													{item} <br />
												</p>
											</>
										);
									})}
								</TabPanel>
								<TabPanel value="3">
									{tools.map((item) => {
										return (
											<>
												<p>
													{item} <br />
												</p>
											</>
										);
									})}
								</TabPanel>
							</div>
						</TabContext>
					</Box>
				</div>
			</div>
		</div>
	);
};

export default Skills;

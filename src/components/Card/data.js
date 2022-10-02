import eyegazeKeyboard from "../../Images/eyegazekey.png";
import portfolioWebsite from "../../Images/porfoliowebsite.png";
import wildfire from "../../Images/wildfire.png";

import FDM_Expense_poster from "../../Images/FDM_expense_poster.png";
import weatherhappydog from "../../Images/weatherhappydog.png";

import { DefaultPlayer as Video } from "react-html5video/dist";
import "react-html5video/dist/styles.css";
import videofile_eyegaze from "../../Images/eyegazeWorking.mp4";

import videofile_FDMexpense from "../../Images/FDM_expenseAPP.mp4";

import Github from "../../Images/github.png";

import { motion } from "framer-motion";

const imageVariants = {
	open: { opacity: 1, y: "0vh" },
	closed: { opacity: 0, y: "-10vhxs" },
};
export const properties = [
	{
		id: 1,
		posterUrl: wildfire,
		imageSection: (
			<motion.img
				className="modal_image"
				alt="Project image"
				src={wildfire}
				variants={imageVariants}
			/>
		),
		Heading: "Wildfire research",
		small_des:
			"Worked as a research assistant at Earth Observation and Wildfire Research Group at King's College London.",
		description: (
			<div>
				<p>Research assistant at a wildfire research group at King's College London</p>
				<a href="https://github.com/harshilchordia/Wildfire_Research" target="_blank">
					<img src={Github} alt="" style={{ width: 50, paddingTop: "50px" }} />
				</a>
			</div>
		),
	},
	{
		id: 2,
		posterUrl: eyegazeKeyboard,
		imageSection: (
			<motion.div className="modal_image" alt="Project Image" variants={imageVariants}>
				<Video>
					<source src={videofile_eyegaze} type="video/mp4" />
				</Video>
			</motion.div>
		),
		Heading: "Eye gaze keyboard",
		small_des:
			"Eye Gaze detection keyboard allows you to type hands-free with the gaze of your eyes.\
			Can also be used to monitor eye health while staring at screen for long periods.",
		description: (
			<div>
				<p>
					Developed an application for typing with eye gaze detection as final year project. Used
					Machine Learning face and eye detection models along with OpenCV, Dlib, and Tkinter
					libraries.
				</p>
				<a href="https://github.com/harshilchordia/Eye-Gaze-Keyboard" target="_blank">
					<img src={Github} alt="" style={{ width: 50, paddingTop: "50px" }} />
				</a>
			</div>
		),
	},
	{
		id: 3,
		posterUrl: portfolioWebsite,
		imageSection: (
			<motion.img
				className="modal_image"
				alt="Project image"
				src={portfolioWebsite}
				variants={imageVariants}
			/>
		),
		Heading: "Porfolio website",
		small_des:
			"React Framerwork responsive website used as a personal portfolio.\
		Uses framer-motion animations and other libraries to create beautiful web app.",
		description: (
			<div>
				<p>
					Responsive Portfolio website to display my projects and experiences. Uses React framework
					with styled components and Framer Motion animations.
				</p>
				<a href="https://github.com/harshilchordia/React-Personal-Portfolio" target="_blank">
					<img src={Github} alt="" style={{ width: 50, paddingTop: "50px" }} />
				</a>
			</div>
		),
	},
	{
		id: 4,
		posterUrl: FDM_Expense_poster,
		imageSection: (
			<motion.div className="modal_image" alt="Project Image" variants={imageVariants}>
				<Video>
					<source src={videofile_FDMexpense} type="video/mp4" />
				</Video>
			</motion.div>
		),
		Heading: "FDM Expense Claim App",
		small_des:
			"Work expense claim app built with react and firebase built for FDM employees at University.",
		description: (
			<div>
				<p>add a description</p>
				<a href="https://github.com/harshilchordia/Expense-App-FDM" target="_blank">
					<img src={Github} alt="" style={{ width: 50, paddingTop: "50px" }} />
				</a>
			</div>
		),
	},
	{
		id: 5,
		posterUrl: weatherhappydog,
		imageSection: (
			<motion.img
				className="modal_image"
				alt="Project image"
				src={weatherhappydog}
				variants={imageVariants}
			/>
		),
		Heading: "Weather Happy Dog",
		small_des: "Weather App for dog walking built for mobile phones on React. ",
		description: (
			<div>
				<p>add a description</p>
				<a href="https://github.com/harshilchordia/Weather_happy_dog" target="_blank">
					<img src={Github} alt="" style={{ width: 50, paddingTop: "50px" }} />
				</a>
			</div>
		),
	},
];

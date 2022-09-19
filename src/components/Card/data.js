import eyegazeKeyboard from "../../Images/eyegazekey.png";
import portfolioWebsite from "../../Images/porfoliowebsite.png";
import wildfire from "../../Images/wildfire.png";

export const properties = [
	{
		id: 1,
		imageUrl: wildfire,
		Heading: "Wildfire research",
		small_des:
			"Worked as a research assistant at Earth Observation and Wildfire Research Group at King's College London.",
		description: "Research assistant at a wildfire research group at King's College London",
	},
	{
		id: 1,
		imageUrl: eyegazeKeyboard,
		Heading: "Eye gaze keyboard",
		small_des:
			"Eye Gaze detection keyboard allows you to type hands-free with the gaze of your eyes.\
			Can also be used to monitor eye health while staring at screen for long periods.",
		description:
			"Developed an application for typing with eye gaze detection as final year project. Used Machine Learning face and eye detection models along with OpenCV, Dlib, and Tkinter libraries.",
	},
	{
		id: 2,
		imageUrl: portfolioWebsite,
		Heading: "Porfolio website",
		small_des:
			"React Framerwork responsive website used as a personal portfolio.\
		Uses framer-motion animations and other libraries to create beautiful web app.",
		description:
			"Responsive Portfolio website to display my projects and experiences. Uses React framework with styled components and Framer Motion animations",
	},
];

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/ProjectsSection/Data";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<ProjectsSection {...homeObjOne} />
			<ProjectsSection {...homeObjTwo} />
			<ProjectsSection {...homeObjThree} />
		</>
	);
};

export default Home;

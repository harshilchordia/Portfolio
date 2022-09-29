import React, { useState, useEffect, useMatch } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";

import Contact from "../components/Contact";
// import { homeObjOne, homeObjThree, homeObjTwo } from "../components/ProjectsSection/Data";

import Projects from "../components/Card";

import { useLocation } from "react-router-dom";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	// scroll to projects section, format= byharshil.web.app/?proj_ID=2#projects

	const { hash } = useLocation();
	const hash_id = hash.substring(1);

	const useScrollToTarget = (hash_id) => {
		useEffect(() => {
			if (hash) {
				const scrollToTarget = document.getElementById(hash_id);
				if (scrollToTarget) {
					scrollToTarget.scrollIntoView({ behavior: "smooth" });
				}
			}
		}, [hash_id]);
	};
	useScrollToTarget(hash_id);

	return (
		// <>
		// 	<Navbar toggle={toggle} />

		// 	<ScrollContainer snap="none" style={{ background: "red" }}>
		// 		<ScrollPage page={0}>
		// 			{/* <Animator animation={batch(Fade())}> */}
		// 			<HeroSection />
		// 			{/* </Animator> */}
		// 		</ScrollPage>
		// 		<CardsSection />

		// 		<ScrollPage page={1}>
		// 			{/* <Animator animation={batch(Fade())}> */}
		// 			<ProjectsSection {...homeObjOne} />
		// 			{/* </Animator> */}
		// 		</ScrollPage>

		// 		{/* <Navbar toggle={toggle} /> */}
		// 		{/* <HeroSection /> */}
		// 		<ProjectsSection {...homeObjOne} />
		// 		<ProjectsSection {...homeObjTwo} />
		// 		<ProjectsSection {...homeObjThree} />
		// 	</ScrollContainer>
		// </>
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<Skills />
			<Projects />

			<Contact />
		</>
	);
};

export default Home;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/ProjectsSection/Data";
import CardsSection from "../components/CardsSection";

import {
	ScrollContainer,
	ScrollPage,
	Animator,
	batch,
	Fade,
	Sticky,
	MoveOut,
	StickyIn,
	FadeIn,
	ZoomIn,
	FadeOut,
	MoveIn,
} from "react-scroll-motion";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
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

		// 		<Sidebar isOpen={isOpen} toggle={toggle} />
		// 		{/* <Navbar toggle={toggle} /> */}
		// 		{/* <HeroSection /> */}
		// 		<ProjectsSection {...homeObjOne} />
		// 		<ProjectsSection {...homeObjTwo} />
		// 		<ProjectsSection {...homeObjThree} />
		// 	</ScrollContainer>
		// </>
		<>
			<Navbar toggle={toggle} />
			<HeroSection />
			<CardsSection />
		</>
	);
};

export default Home;
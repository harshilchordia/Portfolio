import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Card";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div>
				<Sidebar />
				<Navbar />
			</div>

			<Routes>
				<Route path="/" element={<HeroSection />} />
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;

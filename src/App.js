import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
// import Socials from "./components/Socials";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/:section" element={<Home />} />
				<Route path="/" element={<Home />} />
				{/* <Route path="/" element={<Socials />} /> */}
			</Routes>
		</Router>
	);
}

export default App;

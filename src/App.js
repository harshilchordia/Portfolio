import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/:section" element={<Home />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;

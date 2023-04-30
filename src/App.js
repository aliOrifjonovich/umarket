import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Basket from "./pages/Basket";
import Favorites from "./pages/Favorites"
import Comparison from "./pages/Comparison";

function App() {
  return (
		<div className="App">
			<Navbar />
			<div className="layout">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/comparison" element={<Comparison />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;

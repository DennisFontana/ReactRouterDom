import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
	return (
		<Router>
			<Header />
			<AppRouter />
		</Router>
	);
}

export default App;

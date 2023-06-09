import { Routes, Route } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";

export default function App() {
	return (
		<Routes>
			<Route index element={<LandingPage />} />
			<Route path="login" element={<LogIn />} />
			<Route path="create-account" element={<CreateAccount />} />
		</Routes>
	)
}
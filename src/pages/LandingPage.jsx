import { NavLink } from 'react-router-dom';

export default function LandingPage() {
	return (
		<section>
			<h1>Welcome to David's Battleship Game!</h1>
			<h2>Log in or create an account to play.</h2>
			<NavLink to="/login">
				Log In
			</NavLink>
			<NavLink to="/create-account">
				Create Account
			</NavLink>
		</section>
	);
}
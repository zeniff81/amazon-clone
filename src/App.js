import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import './Header.css';

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/checkout">
						<h1>Checkout</h1>
					</Route>
					<Route path="/login">
						<h1>Login here</h1>
					</Route>
					<Route path="/">
						<Header />
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
						<h1>Home</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

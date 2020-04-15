import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './../components/home/HomePage';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route to="/" exact component={HomePage} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;

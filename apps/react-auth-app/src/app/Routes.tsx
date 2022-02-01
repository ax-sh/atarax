import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/" exact>
					<Home />
				</PrivateRoute>
			</Switch>
		</Router>
	);
};

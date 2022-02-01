import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/" exact>
					<HomePage />
				</PrivateRoute>
				<Route path="/login" exact>
					<LoginPage />
				</Route>
				<Route path="/signup" exact>
					<SignUpPage />
				</Route>

				{/*<PrivateRoute path="/please-verify" exact>
					<VerifyEmailPage />
				</PrivateRoute>

				<Route path={`/verify-email/:verificationString`}>
					<EmailVerificationLanding />
				</Route>

				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>

				<Route path="/reset-password/:passwordResetCode">
					<PasswordResetLanding />
				</Route> */}
			</Switch>
		</Router>
	);
};

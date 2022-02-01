import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useUser } from './useUser';

const PrivateRoute = (props: RouteProps) => {
	const user = useUser();
	if (!user) return <Redirect to="/login" />;

	return <Route {...props} />;
};

export default PrivateRoute;

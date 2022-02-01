import React from 'react';

interface User {
	name: string;
	token: string;
}
interface ProtectedProps {
	authSession: User;
}
function Protected({ children, authSession }: React.PropsWithChildren<ProtectedProps>) {
	if (!authSession) {
		console.log('Not authenticated');

		return null;
	}
	console.log('authSession', authSession);

	return children;
}

export default Protected;

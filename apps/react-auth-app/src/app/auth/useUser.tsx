import { useEffect, useState } from 'react';

export const useUser = () => {
	const [user] = useState();
	useEffect(() => {
		console.log('useUser');
	}, [user]);

	return user;
};

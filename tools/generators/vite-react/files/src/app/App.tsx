import React from 'react';
import { getUserInfo } from './apis';
import Layout from './components/Layout';
import { useQuery } from 'react-query';

const ApiError = ({ error }: any) => {
	const { message, ...err } = error;
	return (
		<div role={'alert'}>
			<h1>Error {message}</h1>
			<pre>{JSON.stringify(err, null, 4)}</pre>
		</div>
	);
};

const

function App() {
	const { data, isLoading, error } = useQuery('userInfo', getUserInfo);

	if (isLoading) return <h1>Loading</h1>;
	if (error) return <ApiError error={error} />;

	console.log('user info', data);

	return (
		<Layout className={'AppLayout'}>
			<VideoPlaylistPlayer></VideoPlaylistPlayer>
		</Layout>
	);
}

export default App;

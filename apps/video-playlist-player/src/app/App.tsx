import React from 'react';
import { getUserInfo } from './apis';
import Layout from './components/Layout';
import { useQuery } from 'react-query';
import { VideoPlaylistPlayer } from './components/VideoPlaylistPlayer/VideoPlaylistPlayer';

const ApiError = ({ error }: any) => {
	const { message, ...err } = error;
	return (
		<div role={'alert'}>
			<h1>Error {message}</h1>
			<pre>{JSON.stringify(err, null, 4)}</pre>
		</div>
	);
};

function App() {
	// const { data, isLoading, error } = useQuery('userInfo', getUserInfo);

	// if (isLoading) return <h1>Loading</h1>;
	// if (error) return <ApiError error={error} />;

	// console.log('user info', data);
	const [playlist] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

	return (
		<Layout className={'AppLayout'}>
			<VideoPlaylistPlayer>
				{playlist.map((video, index) => {
					return (
						<VideoPlaylistPlayer.PlaylistItem key={index} data-src={video}>
							<h1>{video}</h1>
						</VideoPlaylistPlayer.PlaylistItem>
					);
				})}
			</VideoPlaylistPlayer>
		</Layout>
	);
}

export default App;

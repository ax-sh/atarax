import React from 'react';
import { getVideoPlaylist } from './apis';
import Layout from './components/Layout';
import { useQuery } from 'react-query';
import { Playlist, VideoPlaylistPlayer } from './components/VideoPlaylistPlayer/VideoPlaylistPlayer';

const ApiError = ({ error }: { error: Error | any }) => {
	const { message, ...err } = error || { message: 'null', err: 'r' };
	return (
		<div role={'alert'}>
			<h1>Error {message}</h1>
			<pre>{JSON.stringify(err, null, 4)}</pre>
		</div>
	);
};

function App() {
	const { data: playlist, isLoading, error } = useQuery<Playlist[]>('videoPlaylist', getVideoPlaylist);

	if (isLoading) return <h1>Loading</h1>;
	if (error) return <ApiError error={error} />;

	return (
		<Layout className={'AppLayout'}>
			<VideoPlaylistPlayer>
				{playlist?.map((videoData, index: number) => {
					return <VideoPlaylistPlayer.PlaylistItem key={index} {...videoData} />;
				})}
			</VideoPlaylistPlayer>
		</Layout>
	);
}

export default App;

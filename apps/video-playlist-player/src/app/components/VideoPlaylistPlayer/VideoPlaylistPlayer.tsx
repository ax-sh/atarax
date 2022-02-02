import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
// https://javascript.plainenglish.io/create-custom-video-controller-using-react-player-7a3d7ed8850a
export interface Playlist {
	video: string;
	image: string;
}

interface CustomPlayerControlsProps {
	playing: boolean;
	handlePause: () => void;
	handlePlay: () => void;
	handleSeekChange: (e: ChangeEvent<HTMLInputElement>) => void;
	currentSeek: number;
	totalDuration: number;
}

const CustomPlayerControls = ({
	playing,
	handlePause,
	handlePlay,
	handleSeekChange,
	currentSeek,
	totalDuration,
}: CustomPlayerControlsProps) => {
	const percentage = (currentSeek / totalDuration).toFixed(3);
	return (
		<div className="bg-white">
			<input type="range" min={0} max={totalDuration} value={currentSeek} onChange={handleSeekChange} />
			<div className="flex justify-between">
				{playing && <button onClick={handlePause}>PAUSE</button>}
				{!playing && <button onClick={handlePlay}>PLAY</button>}
			</div>
			<pre> {JSON.stringify({ playing, handlePause, handlePlay, currentSeek, totalDuration }, null, 4)}</pre>
			{percentage} left
		</div>
	);
};
const CustoPlayer = (props: ReactPlayerProps) => {
	const [state, setState] = React.useState({ currentSeek: 0, playing: false, totalDuration: 0 });
	const ref = React.useRef<ReactPlayer>(null);
	const handleProgress = (e: { playedSeconds: number }) => {
		setState({ ...state, currentSeek: e.playedSeconds });
	};
	const handleSeekChange = (e: ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, currentSeek: +e.target.value });
		if (!ref.current) return;
		ref.current.seekTo(+e.target.value);
		console.log(e, 'sooooos');
	};
	const handlePlay = () => {
		setState((state) => {
			if (state.totalDuration === 0) state.totalDuration = ref.current?.getDuration() || 0;

			// console.log(ref.current, 'ss');

			return { ...state, playing: true };
		});
	};
	const handlePause = () => {
		setState({ ...state, playing: false });
	};
	return (
		<div className="h-full w-full bg-black">
			<ReactPlayer
				ref={ref}
				width={'100%'}
				heigh={'100%'}
				className={'object-contain'}
				{...props}
				controls
				muted
				playing={state.playing}
				onProgress={handleProgress}
			/>
			<CustomPlayerControls
				{...state}
				handleSeekChange={handleSeekChange}
				handlePlay={handlePlay}
				handlePause={handlePause}
			/>
		</div>
	);
};

/* eslint-disable-next-line */
export interface VideoPlaylistPlayerProps {}

const StyledVideoPlaylistPlayer = styled.section``;

export function VideoPlaylistPlayer({ children }: React.PropsWithChildren<VideoPlaylistPlayerProps>) {
	const [currentVideoUrl, setCurrentVideoUrl] = React.useState(
		'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
	);
	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const firstChild = children?.[0];
		if (firstChild) {
			console.log('foo', firstChild.props);
			// setCurrentVideoUrl(firstChild.props.video);
		}
	}, [children]);
	return (
		<StyledVideoPlaylistPlayer className="lg:grid grid-cols-5 h-3 children:flex-grow">
			<div className="video-player-wrapper col-span-3 ">
				<CustoPlayer url={currentVideoUrl} />
			</div>
			<div className="video-playlist-wrapper bg-black col-span-2 overflow-y-auto">{children}</div>
		</StyledVideoPlaylistPlayer>
	);
}
//  React.HTMLAttributes<HTMLDivElement>
VideoPlaylistPlayer.PlaylistItem = function VideoPlaylistPlayerPlaylistItem({ video, image }: Playlist) {
	const image_url = image;
	const video_url = video;

	return (
		<div className={`playlist-item flex cursor-pointer m-4 bg-white rounded-lg hover:opacity-50 overflow-hidden`}>
			<img alt="thumb" className="w-25 h-25 object-contain object-center bg-black" src={image_url} />
			<div className="p-4">
				<h1 className="title">{video_url}</h1>
				<h2>author</h2>
			</div>
		</div>
	);
};

export default VideoPlaylistPlayer;
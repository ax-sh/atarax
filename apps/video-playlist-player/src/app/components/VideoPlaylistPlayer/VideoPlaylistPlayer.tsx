import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

/* eslint-disable-next-line */
export interface VideoPlaylistPlayerProps {}

const StyledVideoPlaylistPlayer = styled.section``;

export function VideoPlaylistPlayer({ children }: React.PropsWithChildren<VideoPlaylistPlayerProps>) {
	return (
		<StyledVideoPlaylistPlayer className="lg:grid grid-cols-5 h-3 children:flex-grow">
			<div className="video-player-wrapper col-span-3 ">
				<ReactPlayer
					width={'100%'}
					heigh={'100%'}
					className={'object-contain'}
					url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
				/>
			</div>
			<div className="video-playlist-wrapper bg-black col-span-2 overflow-y-auto">{children}</div>
		</StyledVideoPlaylistPlayer>
	);
}

VideoPlaylistPlayer.PlaylistItem = function VideoPlaylistPlayerPlaylistItem({
	children,
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const image_url = 'https://source.unsplash.com/500x1500/';
	return (
		<div className={`playlist-item flex cursor-pointer m-4 bg-white rounded-lg hover:opacity-50 overflow-hidden`}>
			<img alt="thumb" className="w-25 h-25 object-contain object-center bg-black" src={image_url} />
			<div className="p-4">
				<h1 className="title">{children}</h1>
				<h2>author</h2>
			</div>
		</div>
	);
};

export default VideoPlaylistPlayer;

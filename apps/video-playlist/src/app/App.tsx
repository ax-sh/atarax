import React from 'react';
import Layout from './components/Layout';

import { useQuery } from 'react-query';
const Video = ({ src }: { src: string }) => {
  return (
    <div className="video-wrapper h-full w-full flex justify-center aspect-video ">
      <video
        className="block h-full object-contain object-center"
        controls
        src={src}
      />
    </div>
  );
};

const VideoPlaylists = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="video-playlist overflow-auto h-full bg-black">
      {children}
    </div>
  );
};
const VideoAndPlaylist = ({ playlist }: { playlist: any[] }) => {
  const [src, setSrc] = React.useState(
    'http://techslides.com/demos/sample-videos/small.mp4'
  );

  const handleThumbClick = (item_data) => {
    setSrc(item_data.video);
  };

  React.useEffect(() => {
    handleThumbClick(playlist[0]);
  }, [playlist]);

  return (
    <section className="h-120 md:grid grid-cols-12 grid-rows-1">
      <div className="col-span-8  row-span-1 bg-black relative">
        <Video src={src} />
      </div>
      <div className="col-span-4 row-span-1">
        <VideoPlaylists>
          {playlist.map((item, index: number) => {
            const { title, item_image } = {
              title: 'item.name',
              item_image: item.image,
              // item_image: 'https://source.unsplash.com/200x200?random',
            };

            return (
              <div
                key={index}
                className="cursor-pointer bg-white flex m-4 hover:opacity-50 rounded-xl overflow-hidden"
                onClick={() => handleThumbClick(item)}
              >
                <img
                  src={item_image}
                  alt="thumb"
                  className="thumb h-30 w-30 object-fill"
                />
                <div className="flex-grow ml-4 p-2">
                  <h6>{title}</h6>
                </div>
              </div>
            );
          })}
        </VideoPlaylists>
      </div>
    </section>
  );
};

const fetchPanets = async () => {
  const result = await fetch('https://swapi.dev/api/people');
  return result.json();
};

const mockMediasArrUrl =
  'https://gist.githubusercontent.com/ax-sh/00cac0411a7bf0908ab3146e509af8dc/raw/fa16d62b6025a170c80665905e06afef2f7dfd55/mock-medias.json';

const fetchMockMedia = () => fetch(mockMediasArrUrl).then((x) => x.json());

const useVideosApi = () => useQuery('videos', fetchMockMedia);

function App() {
  const { data, status, isLoading } = useVideosApi();
  if (isLoading) return <h1>Loading</h1>;
  console.log('data', status, data);

  return (
    <Layout>
      <header>
        <VideoAndPlaylist playlist={data} />
      </header>
    </Layout>
  );
}

export default App;

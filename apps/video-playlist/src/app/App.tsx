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
const VideoAndPlaylist = () => {
  const [src, setSrc] = React.useState(
    'http://techslides.com/demos/sample-videos/small.mp4'
  );

  return (
    <section className="h-120 bg-red-50 md:grid grid-cols-12">
      <div className="col-span-8 bg-black relative">
        <Video src={src} />
      </div>
      <div>video</div>
    </section>
  );
};

const fetchPanets = async () => {
  const result = await fetch('https://swapi.dev/api/people');
  return result.json();
};

const useVideosApi = () => useQuery('videos', fetchPanets);

function App() {
  const { data, status, isLoading } = useVideosApi();
  if (isLoading) return <h1>Loading</h1>;
  console.log('data', status, data);

  return (
    <Layout>
      <header>
        <VideoAndPlaylist />
      </header>
    </Layout>
  );
}

export default App;

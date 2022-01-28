import React from 'react';
import Layout from './components/Layout';

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

function App() {
  return (
    <Layout>
      <header>
        <VideoAndPlaylist />
      </header>
    </Layout>
  );
}

export default App;

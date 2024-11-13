import AppHeader from "../appHeader/AppHeader";
import VideoFrame from "../videoFrame/VideoFrame";
import VideoDescription from "../videoDescription/VideoDescription";
import NextVideos from "../nextVideos/NextVideos";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        <div className="video-wrapper">
          <VideoFrame />
          <VideoDescription />
        </div>
        <NextVideos />
      </main>
    </div>
  );
};

export default App;

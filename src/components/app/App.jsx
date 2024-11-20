import AppHeader from "../AppHeader/AppHeader.jxs";
import VideoFrame from "../VideoFrame/VideoFrame.jxs";
import VideoDescription from "../VideoDescription/VideoDescription.jxs";
import NextVideos from "../NextVideos/NextVideos.jxs";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        <div className="video-wrapper">
          <VideoFrame />
          <div className="video-separator"></div>
          <VideoDescription />
          <div className="video-separator-hidden"></div>
        </div>
        <NextVideos />
      </main>
    </div>
  );
};

export default App;

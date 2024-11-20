import AppHeader from "../AppHeader/AppHeader.jsx";
import VideoFrame from "../VideoFrame/VideoFrame.jsx";
import VideoDescription from "../VideoDescription/VideoDescription.jsx";
import NextVideos from "../NextVideos/NextVideos.jsx";

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

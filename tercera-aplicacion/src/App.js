import './App.css';
import React, {useRef} from "react";
import video from "./assets/GT299 - Little Barrie.mp4"

export function App() {

  const videoRef = useRef(null);

  const videoPlay = () => {
    videoRef.current.play();
  };

  const videoPuse = () => {
    videoRef.current.pause();
  };
  

  return (
    <div>

      <video ref = {videoRef}>
        <source src={video} type="video/mp4"></source>
      </video>

      <div>
        <button onClick = {videoPlay}>Play</button>
        <button onClick = {videoPuse}>Pause</button>
      </div>

    </div>
  )
}

export default App;
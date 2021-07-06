import React, { useState } from "react";
import "./styles/app.scss"
import Controller from './components/Controller';
import Song from './components/Song';
import getSongs from './utils';


function App() {

  const [songs, setSongs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Controller currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
    </div>
  );
}

export default App;

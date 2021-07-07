import React, { useState } from "react";
import "./styles/app.scss"
import Controller from './components/Controller';
import Song from './components/Song';
import Library from './components/Library';
import getSongs from './utils';
import Nav from "./components/Nav";


function App() {

  const [songs, setSongs] = useState(getSongs());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibOpen, setIsLibOpen] = useState(false);

  return (
    <div className="App">
      <Nav isLibOpen={isLibOpen} setIsLibOpen={setIsLibOpen} />
      <Song currentSong={currentSong} />
      <Controller currentSong={currentSong} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
      <Library songs={songs} setCurrentSong={setCurrentSong} isLibOpen={isLibOpen} setIsLibOpen={setIsLibOpen} />
    </div>
  );
}

export default App;

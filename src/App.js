import React from "react";
import "./styles/app.scss"
import Controller from './components/Controller';
import Song from './components/Song';


function App() {
  return (
    <div className="App">
      <Song />
      <Controller/>
    </div>
  );
}

export default App;

import React from 'react';
import LibrarySong from './LibrarySong';
const Library = ({ songs, setCurrentSong }) => {
    return(
        <div className="library">
            <h1>Library</h1>
            {songs.map(song => <LibrarySong song={song} setCurrentSong={setCurrentSong} key={song.id}/>)}
        </div>
    );
}

export default Library;
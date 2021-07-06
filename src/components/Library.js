import React from 'react';
import LibrarySong from './LibrarySong';
const Library = ({songs}) => {
    return(
        <div className="library">
            <h1>Library</h1>
            {songs.map(song => <LibrarySong song={song}/>)}
        </div>
    );
}

export default Library;
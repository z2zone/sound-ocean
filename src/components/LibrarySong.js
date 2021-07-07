import React from 'react';

const LibrarySong = ({ song, setCurrentSong }) => {

    const librarySongHandler = () => {
        setCurrentSong(song);
    }
    
    return(
        <div className="library-song" onClick={librarySongHandler}>
            <img src={song.cover} alt="" />
            <div className="library-song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;
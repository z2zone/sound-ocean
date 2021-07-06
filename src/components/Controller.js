import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleRight, faAngleLeft, faPause } from '@fortawesome/free-solid-svg-icons';

const Controller = ({ currentSong, isPlaying, setIsPlaying }) => {

    const [timeInfo, setTimeInfo] = useState({
        currentTime: 0,
        duration: 0
    });

    const audioRef = useRef(null);

    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setTimeInfo({currentTime: current, duration});
    }
    
    const dragHandler = (e) => {
        setTimeInfo({currentTime: e.target.value});
        audioRef.current.currentTime = e.target.value;
    }
    
    const formatTime = (seconds) =>{
        let minutes = Math.floor(seconds / 60);
        minutes = (minutes >= 10) ? minutes : "0" + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        return minutes + ":" + seconds;
    }

    return(
        <div className="controller">
            <div className="time-controller">
                <p>{formatTime(timeInfo.currentTime)}</p>
                <input min={0} max={timeInfo.duration} value={timeInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{formatTime(timeInfo.duration)}</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={ isPlaying ? faPause : faPlay } size="2x" />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}

export default Controller;
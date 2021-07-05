import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const Controller = () => {
    return(
        <div className="controller">
            <div className="time-controller">
                <input type="range" />
            </div>
            <div className="play-controller">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
                <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
                <FontAwesomeIcon className="skip-forward" icon={faAngleRight} size="2x" />
            </div>
        </div>
    );
}

export default Controller;
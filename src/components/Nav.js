import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibOpen, setIsLibOpen }) => {
    return (
        <nav className="nav">
            <h1>Sound Ocean</h1>
            <button onClick={() => setIsLibOpen(!isLibOpen)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );   
}

export default Nav;
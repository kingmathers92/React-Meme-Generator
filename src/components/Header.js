import React from 'react';
import TrollFace from '../images/trollface.png';

export default function Header() {
    return (
        <nav>
            <img className="troll" src={TrollFace} alt="troll" />
            <h1>Meme Generator</h1>
            <h2>React Course - Project 3</h2>
        </nav>
    )
}
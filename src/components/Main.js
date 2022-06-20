import React, {useState} from 'react';
import memesData from '../memesData.js';

export default function Main() {
    const [meme, setMeme] = useState('https://i.imgflip.com/1bij.jpg');

    function getMeme(){
        const memesArray = memesData.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        setMeme(memesArray[randomMeme].url)
    }

    return (
        <main>
            <div className='form'>
                <input
                    type="text"S
                    className="form-input"
                />
                <input
                    type="text"
                    className="form-input"
                />
                <button onClick={getMeme} className="form-btn">
                    Get a new meme image 🖼
                </button>
            </div>
            <img className="memeImg" src={meme} alt="meme"/>
        </main>
    )
}
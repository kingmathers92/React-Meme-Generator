import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Main() {
  const [meme, setMeme] = useState("https://i.imgflip.com/1bij.jpg");

  function getMeme() {
    const memesArray = memesData.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomMeme].url;
    setMeme(prevMeme => ({
        ...prevMeme,
        randomMeme: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
            type="text"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
            placeholder="Top Text"
            className="form-input"
        />
        <input
            type="text"
            value={meme.bottomText}
            onChange={handleChange}
            name="bottomText"
            placeholder="Bottom Text"
            className="form-input"
        />
        <button onClick={getMeme} className="form-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="memeImg" src={meme.randomMeme} alt=""/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

/* eslint-disable import/extensions */
import "./card-style.scss";
import React from "react";
import {
  getCurrentSound,
  getNewSound,
  playSoundOfArray,
} from "../game/game-handler";

let isFlipped = false;
let failedCount = 0;
let trueCount = 0;
const cardsCount = 8;
const cardFlipper = (id: number) => {
  const cards = document.querySelectorAll(".flipper");
  cards.forEach((element) => {
    if (Number(element.id) === id && element) {
      element.classList.toggle("flip");
      isFlipped = true;
    }
  });
};

const mouseOver = (id: number) => {
  const cards = document.querySelectorAll(".flipper");
  cards.forEach((element) => {
    if (element.id === id.toString() && isFlipped) {
      element.classList.toggle("flip");
      isFlipped = false;
    }
  });
};

const playSound = (
  sound: string,
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const target = event.target as HTMLTextAreaElement;
  if (!target.classList.contains("flip-button")) {
    const audio = new Audio();
    audio.src = sound;
    audio.currentTime = 0;
    audio.play();
  }
};

const ClickCardHandler = async (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const target = event.target as HTMLTextAreaElement;
  const block = document.querySelector("#star-block");
  const img = document.createElement("img");
  const currentSound = getCurrentSound();
  const winStarSrc = "./img/star-win.svg";
  const loseStarSrc = "./img/star.svg";
  const correctSound = "./audio/correct.mp3";
  const errorSound = "./audio/error.mp3";
  const failGameSound = "./audio/failure.mp3";
  const winGameSound = "./audio/success.mp3";
  const soundDelay = 500;
  if (currentSound === target.id) {
    img.src = winStarSrc;
    block?.appendChild(img);
    trueCount += 1;
    playSoundOfArray(correctSound);
    setTimeout(playSoundOfArray, soundDelay, getNewSound());
  } else {
    img.src = loseStarSrc;
    block?.appendChild(img);
    failedCount += 1;
    playSoundOfArray(errorSound);
  }
  if (cardsCount === trueCount) {
    if (failedCount > 0) {
      playSoundOfArray(failGameSound);
      document.getElementById("modal_2")?.classList.add("active");
      const starBlock = document.querySelector("#star-block") as HTMLDivElement;
      starBlock.innerHTML = "";
      setIsPlay(false);
    } else {
      playSoundOfArray(winGameSound);
      document.getElementById("modal_1")?.classList.add("active");
      const starBlock = document.querySelector("#star-block") as HTMLDivElement;
      starBlock.innerHTML = "";
      setIsPlay(false);
    }
  }
};

const Card = (props: {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  id: number;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { id, word, translation, image, audioSrc, isPlay, setIsPlay } = props;
  if (isPlay === true) {
    return (
      <div className="flip-container" key={id}>
        <div
          className="flipper"
          id={audioSrc}
          onClick={(event) => ClickCardHandler(event, setIsPlay)}
          role="none"
        >
          <div className="front deactivated" id={audioSrc}>
            <img
              src={props.image}
              className="card-img-top deactivated"
              alt="..."
              id={audioSrc}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flip-container" key={id} onMouseLeave={() => mouseOver(id)}>
      <div
        aria-hidden="true"
        className="flipper"
        id={id.toString()}
        onClick={(event) => playSound(audioSrc, event)}
      >
        <div className="front">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{word}</p>
            <button
              className="flip-button"
              onClick={() => cardFlipper(id)}
              type="button"
              aria-label="none"
            />
          </div>
        </div>
        <div className="back">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

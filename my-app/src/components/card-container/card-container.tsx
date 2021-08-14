/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
import "./card-container-style.scss";
import "../card/card-style.scss";

import React, { useEffect, useState } from "react";

import MainCard from "../main-card/main-card";
import Card from "../card/card";
import gameHandler, { repeatHandler } from "../game/game-handler";

import Modal from "../modal/modal";
import { Category } from "../../models/category-model";
import { WordModel } from "../../models/word-model";
import { getCategories, getWords } from "../api/api";

const addSoundToState = (
  categoryNumber: number,
  soundArr: string[],
  wordArr: WordModel[][]
) => {
  wordArr[categoryNumber - 1].forEach((elem: WordModel) => {
    soundArr.push(elem.sound);
  });
};

const playBtnHandler = async (
  gameMode: string,
  setGameMode: React.Dispatch<React.SetStateAction<string>>,
  categoryNumber: number,
  wordArr: WordModel[][]
) => {
  const soundArr: string[] = [];
  if (gameMode === "not_run") {
    setGameMode("run");
    addSoundToState(categoryNumber, soundArr, wordArr);
    gameHandler(soundArr);
  }
};

const choseBtn = (
  gameMode: string,
  setGameMode: React.Dispatch<React.SetStateAction<string>>,
  categoryNumber: number,
  wordArr: WordModel[][]
) => {
  if (gameMode === "not_run") {
    return (
      <button
        type="button"
        onClick={() =>
          playBtnHandler(gameMode, setGameMode, categoryNumber, wordArr)
        }
        className="playButton"
      >
        Start
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={() => repeatHandler()}
      className="playButton"
    >
      Repeat
    </button>
  );
};

const CardContainer = (props: {
  categoryNumber: number;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
  gameMode: string;
  setGameMode: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const {
    categoryNumber,
    isPlay,
    gameMode,
    setGameMode,
    setCurrentPage,
    setIsPlay,
  } = props;
  const [wordArr, setWordArr] = useState<WordModel[][]>([[]]);
  const [categoryArr, setCategoryArr] = useState<Category[]>([]);
  useEffect(() => {
    const getWordsArray = async () => {
      setWordArr(await getWords());
      setCategoryArr(await getCategories());
    };
    getWordsArray();
  }, []);
  if (categoryNumber === 0) {
    return (
      <main className="main">
        <Modal
          imgUrl="./img/success.jpg"
          setCurrentPage={setCurrentPage}
          id="modal_1"
        />
        <Modal
          imgUrl="./img/failure.jpg"
          setCurrentPage={setCurrentPage}
          id="modal_2"
        />
        <div className="star-block" id="star-block" />
        <div className="card-container">
          {categoryArr.map((elem, id) => (
            <MainCard
              title={elem.title}
              image={elem.image}
              link={elem.link}
              id={id}
            />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <Modal
        imgUrl="./img/success.jpg"
        setCurrentPage={setCurrentPage}
        id="modal_1"
      />
      <Modal
        imgUrl="./img/failure.jpg"
        setCurrentPage={setCurrentPage}
        id="modal_2"
      />
      <div className="star-block" id="star-block" />
      <div className="card-container">
        {wordArr[categoryNumber - 1].map((elem, id) => (
          <Card
            word={elem.word}
            translation={elem.translation}
            image={elem.image}
            audioSrc={elem.sound}
            id={id}
            isPlay={isPlay}
            setIsPlay={setIsPlay}
          />
        ))}
      </div>
      {isPlay ? (
        choseBtn(gameMode, setGameMode, categoryNumber, wordArr)
      ) : (
        <></>
      )}
    </main>
  );
};

export default CardContainer;

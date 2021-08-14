/* eslint-disable import/extensions */
import "./switch-style.scss";
import React from "react";
import CardContainer from "../../card-container/card-container";

const checkboxChange = (
  isPlay: boolean,
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>,
  currentPage: number,
  gameMode: string,
  setGameMode: React.Dispatch<React.SetStateAction<string>>,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  setIsPlay(!isPlay);
  if (isPlay) {
    const block = document.querySelector("#star-block") as HTMLDivElement;
    block.innerHTML = "";
  }
  <CardContainer
    categoryNumber={currentPage}
    isPlay={isPlay}
    setIsPlay={setIsPlay}
    gameMode={gameMode}
    setGameMode={setGameMode}
    setCurrentPage={setCurrentPage}
  />;
};
const SwitchOnOFF = (props: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isPlay: boolean;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
  gameMode: string;
  setGameMode: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    isPlay,
    setIsPlay,
    currentPage,
    gameMode,
    setGameMode,
    setCurrentPage,
  } = props;
  return (
    <div className="wrapper">
      <div className="on-off-toggle">
        <input
          className="on-off-toggle__input"
          type="checkbox"
          id="bopis"
          onChange={() =>
            checkboxChange(
              isPlay,
              setIsPlay,
              currentPage,
              gameMode,
              setGameMode,
              setCurrentPage
            )
          }
        />
        <label htmlFor="bopis" className="on-off-toggle__slider" />
      </div>
    </div>
  );
};

export default SwitchOnOFF;

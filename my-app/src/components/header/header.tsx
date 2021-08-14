/* eslint-disable import/extensions */
import "./header-style.scss";
import React from "react";
import { Link } from "react-router-dom";
import SwitchOnOFF from "./switch-btn/switch-btn";

const Header = (props: {
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
    <header className="header">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>
        <div className="menu__box">
          <ul className="menu_list">
            <li>
              <Link to="/Home" className="menu__item" id="header_0">
                Main page
              </Link>
            </li>
            <li>
              <Link to="/Action_A" className="menu__item" id="header_1">
                Action (set A)
              </Link>
            </li>
            <li>
              <Link to="/Action_B" className="menu__item" id="header_2">
                Action (set B)
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/Animal_A" id="header_3">
                Animal (set A)
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/Animal_B" id="header_4">
                Animal (set B)
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/Clothes" id="header_5">
                Clothes
              </Link>
            </li>
            <li>
              <Link className="menu__item" to="/Emotions" id="header_6">
                Emotions
              </Link>
            </li>
            <li>
              <a className="menu__item" href="/" id="header_7">
                name
              </a>
            </li>
            <li>
              <a className="menu__item" href="/" id="header_8">
                name
              </a>
            </li>
          </ul>
          <Link to="/Login">
            <button className="header-login__button" type="button">
              Login
            </button>
          </Link>
        </div>
      </div>
      <SwitchOnOFF
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        currentPage={currentPage}
        gameMode={gameMode}
        setGameMode={setGameMode}
        setCurrentPage={setCurrentPage}
      />
    </header>
  );
};
export default Header;

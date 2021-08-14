/* eslint-disable import/extensions */
import "./App-style.scss";
import React, { useState } from "react";
import Routing from "./components/router/router";

const App: React.FC = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [gameMode, setGameMode] = useState<string>("not_run");
  const [currentCategory, setCurrentCategory] = useState<number>(0);
  const [currentCategoryName, setCurrentCategoryName] = useState<string>("");
  return (
    <div className="container">
      <Routing
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        gameMode={gameMode}
        setGameMode={setGameMode}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        currentCategoryName={currentCategoryName}
        setCurrentCategoryName={setCurrentCategoryName}
      />
    </div>
  );
};

export default App;

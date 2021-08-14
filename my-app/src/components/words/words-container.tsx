/* eslint-disable import/extensions */
import "./words-style.scss";
import React, { useEffect, useState } from "react";
import Word from "./word";
import { getCategoryById, getWordsById } from "../api/api";
import { WordModel } from "../../models/word-model";
import { Category } from "../../models/category-model";

const WordsContainer = (props: { id: number }) => {
  const [arr, setArr] = useState<WordModel[]>([]);
  const [currentCategory, setCurrentCategory] = useState<Category>();
  useEffect(() => {
    const getWordsArray = async () => {
      setArr(await getWordsById(props.id));
      console.log(props.id);
      setCurrentCategory(await getCategoryById(props.id));
    };
    getWordsArray();
  }, []);
  console.log(currentCategory);
  return (
    <div className="words-container">
      <div className="words-grid">
        {arr.map((elem: WordModel) => (
          <Word
            word={elem.word}
            translation={elem.translation}
            sound={elem.sound}
            image={elem.image}
          />
        ))}
        <div className="words-element__wrapper__add">
          <p className="words-title">Add new word</p>
          <button type="button" aria-label="none" className="add-btn__word" />
        </div>
      </div>
    </div>
  );
};

export default WordsContainer;

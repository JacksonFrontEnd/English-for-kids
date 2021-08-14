import "./words-style.scss";
import React from "react";

const Word = (props: {
  word: string;
  translation: string;
  sound: string;
  image: string;
}) => {
  const { word, translation, sound, image } = props;
  console.log(sound);
  return (
    <div className="words-element__wrapper">
      <div className="title-wrapper__word">
        <div className="description-container">
          <p className="description-p">
            <strong>Word:</strong>
            {word}
          </p>
          <p className="description-p">
            <strong>Translation:</strong>
            {translation}
          </p>
          <p className="description-p">
            <strong>Sound file:</strong>
            {sound}
          </p>
          <div className="image-block">
            <strong className="description-p">Image:</strong>
            <img src={image} alt="" className="word-image" />
          </div>
        </div>
        <button type="button" aria-label="none" className="delete-btn__word" />
      </div>
      <div className="button-block__word">
        <button type="button" aria-label="none" className="button-word">
          Change
        </button>
      </div>
    </div>
  );
};
export default Word;

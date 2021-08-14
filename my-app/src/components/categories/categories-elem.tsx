/* eslint-disable import/extensions */
import "./categories-style.scss";
import React from "react";
import { Link } from "react-router-dom";
import { deleteArrWords, deleteCategory } from "../api/api";

const setCategories = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>,
  title: string,
  setCurrentCategoryName: React.Dispatch<React.SetStateAction<string>>
) => {
  const target = event.target as HTMLTextAreaElement;
  setCurrentCategory(Number(target.id));
  setCurrentCategoryName(title);
};

const CategoryElem = (props: {
  id: number;
  title: string;
  length: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
  setCurrentCategoryName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { id, title, length, setCurrentCategory, setCurrentCategoryName } =
    props;
  const deleteBtnHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = event.target as HTMLTextAreaElement;
    deleteCategory(Number(target.id));
    deleteArrWords(Number(target.id));
    window.location.reload();
  };
  return (
    <div className="category-element__wrapper">
      <div className="title-wrapper">
        <h1 className="title-h1">{title}</h1>
        <button
          type="button"
          aria-label="none"
          className="delete-btn"
          id={id.toString()}
          onClick={(event) => deleteBtnHandler(event)}
        />
      </div>
      <p className="words-counter">Words: {length}</p>
      <div className="categories-button-block">
        <Link to="/Edit_category">
          <button
            type="button"
            aria-label="none"
            className="button"
            id={id.toString()}
            onClick={(event) =>
              setCategories(
                event,
                setCurrentCategory,
                title,
                setCurrentCategoryName
              )
            }
          >
            Update
          </button>
        </Link>
        <Link key={id} to="/Word">
          <button
            type="button"
            aria-label="none"
            className="button"
            id={id.toString()}
            onClick={(event) =>
              setCategories(
                event,
                setCurrentCategory,
                title,
                setCurrentCategoryName
              )
            }
          >
            Add word
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CategoryElem;

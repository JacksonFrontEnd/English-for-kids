/* eslint-disable import/extensions */
import "./categories-style.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryElem from "./categories-elem";
import { getCategories } from "../api/api";
import { Category } from "../../models/category-model";

const Categories = (props: {
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
  setCurrentCategoryName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [arr, setArr] = useState<Category[]>([]);
  useEffect(() => {
    const getCategoriesArray = async () => {
      setArr(await getCategories());
    };
    getCategoriesArray();
  }, []);
  const { setCurrentCategory, setCurrentCategoryName } = props;
  return (
    <div className="category-container">
      <div className="category-grid">
        {arr.map((elem: Category, id: number) => (
          <CategoryElem
            id={id}
            title={elem.title}
            length={elem.count}
            setCurrentCategory={setCurrentCategory}
            setCurrentCategoryName={setCurrentCategoryName}
          />
        ))}
        <Link to="/Add_category">
          <div className="category-element__wrapper">
            <p className="words-counter">Create new Category</p>
            <button type="button" aria-label="none" className="add-btn" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;

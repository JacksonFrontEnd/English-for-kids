import "./edit-modal-style.scss";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { tfSize } from "../utils/const";
import { updateCategory } from "../api/api";

const EditCategoriesModal = (props: {
  currentCategory: number;
  currentCategoryName: string;
}) => {
  const history = useHistory();
  const EditBtnHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const categoryName = document.querySelector(
      "#category-name"
    ) as HTMLInputElement;
    const data = {
      count: 0,
      title: categoryName.value,
      image: "",
      link: `/${categoryName.value}`,
    };
    updateCategory(data, props.currentCategory);
    history.push("/Categories");
  };
  return (
    <div className="login-modal-wrapper">
      <div className="login-modal">
        <h3 className="modal-title">Edit category</h3>
        <form className="form">
          <div className="input-block">
            <input
              type="text"
              id="category-name"
              size={tfSize}
              placeholder="Login"
              className="text-field"
            />
          </div>
          <div className="button-block">
            <Link to="/Categories">
              <button type="button" className="btn reset">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="btn"
              onClick={(event) => EditBtnHandler(event)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditCategoriesModal;

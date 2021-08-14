import "./add-categories-style.scss";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { tfSize } from "../utils/const";
import { createCategory } from "../api/api";

const AddCategoriesModal = () => {
  const history = useHistory();
  const AddBtnHandler = (
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
    createCategory(data);
    history.push("/Categories");
  };
  return (
    <div className="login-modal-wrapper">
      <div className="login-modal">
        <h3 className="modal-title">Add category</h3>
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
              onClick={(event) => AddBtnHandler(event)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCategoriesModal;

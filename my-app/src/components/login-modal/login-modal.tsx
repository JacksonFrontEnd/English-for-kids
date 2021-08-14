import "./login-modal-style.scss";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { tfSize } from "../utils/const";

const LoginModal = () => {
  const history = useHistory();
  const LoginBtnHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const login = document.querySelector("#login") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;
    if (login.value === "admin" && password.value === "admin") {
      history.push("/Categories");
    } else {
      history.push("/Home");
    }
  };
  return (
    <div className="login-modal-wrapper">
      <div className="login-modal">
        <h3 className="modal-title">Login</h3>
        <form className="form">
          <div className="input-block">
            <input
              type="text"
              id="login"
              size={tfSize}
              placeholder="Login"
              className="text-field"
            />
            <input
              type="password"
              id="password"
              size={tfSize}
              placeholder="Password"
              className="text-field"
            />
          </div>
          <div className="button-block">
            <Link to="/Home">
              <button type="button" className="btn reset">
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="btn"
              onClick={(event) => LoginBtnHandler(event)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginModal;

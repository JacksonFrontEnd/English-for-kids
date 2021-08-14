import "./header-style.scss";
import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => (
  <header className="admin-header">
    <div className="active-page">
      <Link to="/Categories">
        <p className="active">Categories</p>
      </Link>
      <p>Words</p>
    </div>
    <Link to="/Home">
      <button className="log-out__btn" type="button" aria-label="none">
        Log out
      </button>
    </Link>
  </header>
);
export default AdminHeader;

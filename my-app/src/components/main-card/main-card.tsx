import React from "react";
import { Link } from "react-router-dom";
import "./main-card-style.scss";

const MainCard = (props: {
  title: string;
  image: string;
  link: string;
  id: number;
}) => {
  const { image, title, id, link } = props;
  return (
    <Link className="card-wrapper" key={id} to={link}>
      <img src={image} className="main-card-img" alt="..." />
      <div className="main-card-body">
        <p className="main-card-text">{title}</p>
      </div>
    </Link>
  );
};
export default MainCard;

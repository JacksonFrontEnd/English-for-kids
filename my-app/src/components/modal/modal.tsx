import "./modal-style.scss";
import React from "react";

const CloseHandler = (
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
) => {
  setCurrentPage(0);
  document.getElementById("modal_1")?.classList.remove("active");
  document.getElementById("modal_2")?.classList.remove("active");
};

const Modal = (props: {
  imgUrl: string;
  id: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { imgUrl, id, setCurrentPage } = props;
  return (
    <div
      className="modal-wrapper"
      id={id}
      onClick={() => CloseHandler(setCurrentPage)}
      role="none"
    >
      <div className="modal">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  );
};
export default Modal;

import React from "react";

const NextBtn = ({ onClick, innerText }) => {
  return (
    <div className="nextBtnDiv">
      <p className="nextBtn" onClick={onClick}>
        {innerText}
      </p>
    </div>
  );
};

export default NextBtn;

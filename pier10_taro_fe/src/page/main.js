import React, { use } from "react";
import "../styles/Main.scss";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div>
        <div>
          <p>Peir 10 : All My Day</p>
          <p>귀인타로</p>
        </div>
        <div>
          <p>MAIN IMG.... DENIMALZ...</p>
        </div>
        <div className="nextBtnDiv">
          <p className="nextBtn" onClick={() => navigate("/star")}>
            다음
          </p>
        </div>
      </div>
    </body>
  );
};

export default Main;

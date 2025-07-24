import React, { use } from "react";
import "../styles/Main.scss";
import { useNavigate } from "react-router-dom";
import NextBtn from "../components/nextBtn";
const Main = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div id="root">
        <div>
          <p>Peir 10 : All My Day</p>
          <p>귀인타로</p>
        </div>
        <div>
          <p>MAIN IMG.... DENIMALZ...</p>
        </div>
        <NextBtn onClick={() => navigate("/star")} innerText="다음" />
      </div>
    </body>
  );
};

export default Main;

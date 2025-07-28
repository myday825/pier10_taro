import React, { use } from "react";
import "../styles/Main.scss";
import { useNavigate } from "react-router-dom";
import NextBtn from "../components/nextBtn";
import main_denimalz from "../assets/imgs/main_denimalz.png";
const Main = () => {
  const navigate = useNavigate();

  return (
    <body>
      <div id="root">
        <p className="taroLogo">귀인타로</p>

        <img src={main_denimalz} className="main_denimalz" />

        <NextBtn onClick={() => navigate("/star")} innerText="다음" />
      </div>
    </body>
  );
};

export default Main;

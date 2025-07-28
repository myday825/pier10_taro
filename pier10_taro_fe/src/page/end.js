import React from "react";
import NextBtn from "../components/nextBtn";
import { useLocation } from "react-router-dom";

const End = () => {
  const location = useLocation();
  const result = location.state?.result;
  console.log(result.star);
  return (
    <div id="root">
      <p>🐻👂🏻 : 자 결과나왔다~ 함 봐봐라</p>
      <div className="resultStarDiv">
        <p>{result.selectedStar}</p>
        <div>
          {result.star.map((resultText) => {
            return <p className="resultLine">{resultText}</p>;
          })}
        </div>
      </div>
      <div>유튜브영상</div>
      <NextBtn innerText="공유하기" />
    </div>
  );
};

export default End;

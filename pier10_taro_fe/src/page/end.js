import React from "react";
import NextBtn from "../components/nextBtn";
import { useLocation } from "react-router-dom";

const End = () => {
  const location = useLocation();
  const result = location.state?.result;
  return (
    <div id="root">
      <p>🐻👂🏻 : 자 결과나왔다~ 함 봐봐라</p>
      <div>
        <p>지피티 결과 출력</p>
        <p>{result}</p>
      </div>
      <div>유튜브영상</div>
      <NextBtn innerText="공유하기" />
    </div>
  );
};

export default End;

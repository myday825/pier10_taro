import React, { useState } from "react";
import { motion } from "framer-motion";
import NextBtn from "../components/nextBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Star = () => {
  const [star, setStar] = useState();
  const navigate = useNavigate();

  const apiPost = async () => {
    try {
      const res = await axios.post("/api/chat", {
        message: "테스트중",
      });
      //   navigate("/end", { state: { result: res.data.result } });
      console.log("star page", res.data);
    } catch (err) {
      console.log("star page / gpt api 요청 실패 > ", err);
    }
  };

  return (
    <motion.div
      id="root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <span>별자리선택 페이지</span>
      <p>🐻👂🏻 : 머,, 잘왔따,, 운세보러왔나~ 너거들 별자리 함 클릭해봐라~</p>
      <div id="starAll">
        {/* 별자리 리스트업 */}
        <div className="starLine">
          <p>물병자리</p>
          <p>물고기자리</p>
          <p>양자리</p>
          <p>황소자리</p>
        </div>
        <div className="starLine">
          <p>쌍둥이자리</p>
          <p>게자리</p>
          <p>사자자리</p>
          <p>처녀자리</p>
        </div>
        <div className="starLine">
          <p>전칭자리</p>
          <p>전갈자리</p>
          <p>사수자리</p>
          <p>염소자리</p>
        </div>
      </div>
      <NextBtn onClick={() => apiPost()} innerText="다음" />
    </motion.div>
  );
};

export default Star;

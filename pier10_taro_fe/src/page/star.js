import React, { useState } from "react";
import { motion } from "framer-motion";
import NextBtn from "../components/nextBtn";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { starimgs } from "../components/starimgs.js";

const Star = () => {
  const [star, setStar] = useState();
  const navigate = useNavigate();
  const arrStar = [
    "물병자리",
    "물고기자리",
    "양자리",
    "황소자리",
    "쌍둥이자리",
    "게자리",
    "사자자리",
    "처녀자리",
    "천칭자리",
    "전갈자리",
    "사수자리",
    "염소자리",
  ];

  //별자리에 대한 gpt 운세 요청
  const apiPost = async () => {
    if (star) {
      console.log("D?D?D?", star.m_star);
      try {
        const res = await axios.post("/api/chat", {
          selectedStar: star.m_star,
        });
        console.log("res", res);
        navigate("/end", { state: { result: res.data } });
        console.log("star page", res.data);
      } catch (err) {
        console.log("star page / gpt api 요청 실패 > ", err);
      }
    } else {
      alert("아따마~ 별들아~ 너거들 별자리 눌러봐라~! 🐻👂🏻");
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
        {arrStar.map((m_star, id) => (
          <div
            className="starimgDiv"
            onClick={() => {
              setStar({ m_star });
              console.log("지금 저장된 별자리 > ", star);
            }}
          >
            {console.log(starimgs[m_star])}
            <img src={starimgs[m_star]} className="starImg" />
            <span>{m_star}</span>
          </div>
        ))}
      </div>
      <NextBtn onClick={() => apiPost()} innerText="다음" />
    </motion.div>
  );
};

export default Star;

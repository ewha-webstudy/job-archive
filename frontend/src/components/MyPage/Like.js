import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardBoard from "../Card/CardBoard";

const SaveList = () => {
  //받아온 데이터를 jobs에 저장
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/mypage/like")
      .then((res) => {
        const likes = res.data;
        console.log(likes);
        setLikes(likes);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  }, []);

  return (
    <SaveListBlock>
      <CardBoard jobs={likes} logged={true} /> {/*수정 중*/}
    </SaveListBlock>
  );
};

const SaveListBlock = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8c8c8;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background: #ededed;
    border-radius: 10px;
  }

  width: 75%;
  height: 80%;

  float: right;
  display: flex;
  margin-top: 7%;
  flex-wrap: wrap;
  margin-right: 1rem;
`;
export default SaveList;

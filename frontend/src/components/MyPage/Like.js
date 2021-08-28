import { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../../utils/api";
import MyPageCard from "../Card/MyPageCard";

const Like = ({ islogin }) => {
  //받아온 데이터를 likes에 저장
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    API.get("/api/mypage/like")
      .then((res) => {
        console.log(res.data);
        setLikes(res.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
        // if (err.response.status === 401) {
        //   alert("Token expired");
        // }
        // if (err.response.status === 404) {
        //   alert("DB 처리 중 에러가 발생했습니다.");
        // }
      });
  }, []);

  return (
    <SaveListBlock>
      <MyPageCard jobs={likes} islogin={islogin} />
    </SaveListBlock>
  );
};

const SaveListBlock = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    height: 80%;
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
  flex-wrap: wrap;
  margin-top: 4.5rem;
  margin-right: 2rem;
`;
export default Like;

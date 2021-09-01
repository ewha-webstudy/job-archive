import { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../../utils/api";
import MyPageContainer from "../../containers/MyPageContainer";

/* 수정 중 */
const Like = ({ islogin }) => {
  const [likes, setLikes] = useState([]);

  // 로그인 여부 확인
  useEffect(() => {
    if (!islogin) {
      alert("로그인 후 이용 가능합니다.");
    } else {
      API.get("api/mypage/like")
        .then((res) => {
          const likes = res.data;
          console.log(likes);
          setLikes(likes);
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    }
  }, [islogin, likes]);

  return (
    <SaveListBlock>
      <MyPageContainer />
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

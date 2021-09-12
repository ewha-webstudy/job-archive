import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styled from "styled-components";
import API from "../../utils/api";
import MyPageCard from "../../components/Card/MyPageCard";

function LikeContainer() {
  const history = useHistory();

  // store의 state 값 조회 - 로그인 여부 확인
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  const [likes, setLikes] = useState([]);

  // 로그인 여부 확인
  useEffect(() => {
    if (!islogin) {
      alert("로그인 후 이용 가능합니다.");
      history.push("/member/auth");
    } else {
      API.get("/api/mypage/like")
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("Toekn expired");
          }
          if (err.response.status === 404) {
            alert("DB 처리 중 에러 발생");
          }
        });
    }
  }, []);

  if (likes.length === 0) {
    return <EmptyWrapper>저장된 채용 공고가 없습니다.</EmptyWrapper>;
  } else {
    return <MyPageCard islogin={islogin} likes={likes} />;
  }
}

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: orange;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeContainer;

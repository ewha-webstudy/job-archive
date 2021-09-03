import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import API from "../../utils/api";

import MyPageCard from "../../components/Card/MyPageCard";

function LikeContainer() {
  // store의 state 값 조회 - 로그인 여부 확인
  const { islogin } = useSelector((state) => ({
    islogin: state.logger.islogin,
  }));

  const [likes, setLikes] = useState([]);

  // 로그인 여부 확인
  useEffect(() => {
    if (!islogin) {
      alert("로그인 후 이용 가능합니다.");
    } else {
      API.get("/api/mypage/like")
        .then((res) => {
          setLikes(res.data);
          console.log(likes);
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    }
  }, []);

  return <MyPageCard islogin={islogin} likes={likes} />;
}

export default LikeContainer;

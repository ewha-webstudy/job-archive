import { Card, CardHeader, Box, Image, Button } from "grommet";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import allActions from "../../actions";
import { Link } from "react-router-dom";
import { Favorite } from "grommet-icons";
import "../../style/card.css";
import API from "../../utils/api";
import GetDday from "./GetDday";

// 좋아요 여부 - isLiked, logged 일단 삭제했음
function JobCard({ name, id, end, position, logo, likeNo, islogin }) {
  const [isliked, setLiked] = useState(false);
  const [numLikes, setnumLikes] = useState(likeNo);

  const sendnumLikes = () => {
    // 좋아요를 누른거라면
    if (!isliked) {
      // user 테이블 좋아요 추가
      console.log("isLiked status:", isliked);
      API.post(`/api/like`, { jobid: id })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });

      // job 테이블 좋아요 추가
      API.post(`/api/likeIncrease`, { id: id })
        .then(response => {
          console.log(response);
          // 좋아요 수를 res.likeNo로 설정
          setnumLikes(response.data.likeNo);
        })
        .catch(error => {
          console.error(error);
        });

      // API.post("/api/likeIncrease")
    } else {
      // 좋아요를 취소한거라면
      console.log("isLiked status:", isliked);
      // user 테이블 좋아요 삭제
      API.delete(`/api/unlike/${id}`)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });

      // job 테이블 좋아요 감소
      API.post(`/api/likeDecrease`, { id: id })
        .then(response => {
          console.log(response);
          // 좋아요 수를 res.likeNo로 설정
          setnumLikes(response.data.likeNo);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  const checkIsLogin = () => {
    // 로그인되어 있고, liked가 false라면
    if (islogin && !isliked) {
      // like 상태를 true로 바꾸고, numLike는 +1 해주기
      setLiked(!isliked);
      setnumLikes(numLikes);

      // 서버로 좋아요 수 보낸다
      sendnumLikes();
    }

    // 로그인되어 있고, liked가 true인 경우
    else if (islogin && isliked) {
      setLiked(!isliked);
      setnumLikes(numLikes);

      sendnumLikes();
    }

    // 로그인 안되어 있는 경우
    else {
      alert("책갈피는 로그인 후 이용할 수 있습니다!");
    }
  };

  /*
  const goToDetail = async () => {
    console.log("click");
    await API.get(`/api/job/${id}`)
      .then(response => {
        console.log(response);
        // history.push(`/api/job/${id}`);
      })
      .catch(error => {
        // TODO: 서버 HTTP 에러 코드 확인하고 예외 처리하기
        console.error(error);
      });
  };
  */

  return (
    <Card width="small" background="light-1" responsive>
      <CardHeader height="xxsmall" pad="medium">
        <span className="card__name">{name}</span>
        <div key={id}>
          <span className="card__likes">{numLikes}</span>
          <Button
            icon={<Favorite color={isliked ? "red" : "black"} />}
            style={{ padding: 0 }}
            onClick={checkIsLogin}
            hoverIndicator
          />
        </div>
      </CardHeader>
      <div className="card__body">
        <Box height="xxsmall" width="xxsmall" margin="auto">
          <Image
            alt="job-archive"
            align="center"
            pad="horizontal"
            fit="cover"
            round
            src={logo}
          />
        </Box>
        <div className="card__duedate">{GetDday(end)}</div>
        <div className="card__position">
          {position.substring(0, 10) + "..."}
        </div>
      </div>
      <footer className="card__footer">
        <Link to={`/api/job/${id}`}>
          <Button
            color={{ border: "gray" }}
            gap="medium"
            label="자세히 보기"
            hoverIndicator
          />
          {/* onClick={goToDetail} */}
        </Link>
      </footer>
    </Card>
  );
}

export default JobCard;

import { Card, CardHeader, CardBody, Box, Image, Button } from "grommet";
import React, { useState } from "react";
import { Favorite } from "grommet-icons";
import "../../style/card.css";
import API from "../../utils/api";
import GetDday from "./GetDday";

function JobCard({ id, name, end, position, logo, likeNo }) {
  const [liked, setLiked] = useState(true);
  const [numLikes, setnumLikes] = useState(likeNo);
  const [isLogin, setIsLogin] = useState(false);
  
  // user.id 임의로 넣어놨음
  const user = { id: "cdnnnl", name: "hyosin" };
  window.sessionStorage.setItem("id", user.id);

  useEffect(() => {
    const userId = window.sessionStorage.getItem("id");
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  // 좋아요 누를 때마다 서버로 전송
  // POST api/like/{사용자 아이디}/{채용공고 id}
  useEffect(
    () => {
      API.post(`/api/like/${user.id}/${id}`)
        .then(response => {
          //console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
    //postLike();
    [numLikes]
  );

  const checkIsLogin = () => {
    console.log("isLogin", isLogin);
    // 로그인되어 있고, liked가 false라면
    if (isLogin === true && !liked) {
      setLiked(!liked);
      setnumLikes(numLikes + 1);
    }
    // 로그인되어 있고, liked가 true인 경우
    else if (isLogin === true && liked) {
      setLiked(!liked);
      setnumLikes(numLikes - 1);
    }
    // 로그인 안되어 있는 경우
    else {
      alert("책갈피는 로그인 후 이용할 수 있습니다!");
    }
  };

  const goToDetail = async () => {
    console.log("click");
    await API.get(`/api/job/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Card width="small" background="light-1" responsive>
      <CardHeader height="xxsmall" pad="medium">
        <span className="text">{name}</span>
        <div key={id}>
          <span className="text_likes">{numLikes}</span>
          <Button
            icon={<Favorite color={liked ? "red" : "black"} />}
            style={{ padding: 0 }}
            onClick={checkIsLogin}
            hoverIndicator
          />
        </div>
      </CardHeader>
      <div className="card_body">
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
          <div className="card_duedate">{GetDday(end)}</div>
        <div className="card_position">{position.substring(0, 10) + "..."}</div>
      </div>
      <footer className="footer">
        <Link to={`/api/job/${id}`}>
          <Button
            color={{ border: "gray" }}
            gap="medium"
            label="자세히 보기"
            hoverIndicator
            onClick={goToDetail}
          />
        </Link>
      </footer>
    </Card>
  );
}

export default JobCard;

import { Card, CardHeader, Box, Image, Button } from "grommet";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Favorite } from "grommet-icons";
import "../../style/card.css";
import API from "../../utils/api";
import GetDday from "./GetDday";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function JobCard({ name, id, end, position, logo, likeNo, islogin }) {
  const [isliked, setLiked] = useState(false);
  const [numLikes, setnumLikes] = useState(likeNo);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -100,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
    if (!inView) {
      animation.start({
        y: 0,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
    // console.log("print inView", inView);
  }, [inView]);

  const sendnumLikes = () => {
    if (!isliked) {
      console.log("isLiked status:", isliked);
      API.post(`/api/like`, { jobid: id })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });

      API.post(`/api/likeIncrease`, { id: id })
        .then((response) => {
          console.log(response);
          setnumLikes(response.data.likeNo);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("isLiked status:", isliked);
      API.delete(`/api/unlike/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      API.post(`/api/likeDecrease`, { id: id })
        .then((response) => {
          console.log(response);
          setnumLikes(response.data.likeNo);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const checkIsLogin = () => {
    if (islogin && !isliked) {
      setLiked(!isliked);
      setnumLikes(numLikes);
      sendnumLikes();
    } else if (islogin && isliked) {
      setLiked(!isliked);
      setnumLikes(numLikes);
      sendnumLikes();
    } else {
      alert("책갈피는 로그인 후 이용할 수 있습니다!");
    }
  };

  return (
    <motion.div ref={ref} animate={animation} className="b-container">
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
          <Link to={`/job/${id}`}>
            <Button
              color={{ border: "gray" }}
              gap="medium"
              label="자세히 보기"
              hoverIndicator
            />
          </Link>
        </footer>
      </Card>
    </motion.div>
  );
}

export default JobCard;

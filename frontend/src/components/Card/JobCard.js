import { Card, CardHeader, CardBody, Box, Image, Button } from "grommet";
import React, { useState } from "react";
import { Favorite } from "grommet-icons";
import "../../style/card.css";
import API from "../../utils/api";

function JobCard({ key, name, start, end, position, logo, likeNo }) {
  const [liked, setLiked] = useState(true);
  const [numLikes, setnumLikes] = useState(0);

  const goToDetail = async () => {
    console.log("click");
    await API.get("/api/job/${key}", {})
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
        <div key={key}>
          <span className="text_likes">{likeNo}</span>
          {liked ? (
            <Button
              icon={<Favorite color="red" />}
              style={{ padding: 0 }}
              onClick={() => setLiked(!liked)}
              hoverIndicator
            />
          ) : (
            <Button
              icon={<Favorite color="black" />}
              style={{ padding: 0 }}
              onClick={() => setLiked(!liked)}
              hoverIndicator
            />
          )}
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
        <div className="card_duedate">D-{end.substring(end.length - 2)}</div>
        <div>
          {start}-{end}
        </div>
        <div className="card_position">{position}</div>
      </div>
      <footer className="footer">
        <Button
          color={{ border: "gray" }}
          gap="medium"
          label="자세히 보기"
          hoverIndicator
          onClick={goToDetail}
        />
      </footer>
    </Card>
  );
}

export default JobCard;

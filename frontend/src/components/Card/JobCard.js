import { Card, CardHeader, CardBody, Box, Image, Button } from "grommet";
import React, { useState } from "react";
import { Favorite } from "grommet-icons";
import "../../style/card.css";

function JobCard({ name, start, end, position, logo }) {
  const [liked, setLiked] = useState(false);
  const [numLikes, setnumLikes] = useState(0);

  return (
    <Card width="small" background="light-1" responsive>
      <CardHeader height="xxsmall" pad="medium">
        <span className="text">{name}</span>
        <div>
          <span className="text_likes">{numLikes}</span>
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
          <Image align="center" pad="horizontal" fit="cover" round src={logo} />
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
        />
      </footer>
    </Card>
  );
}

export default JobCard;

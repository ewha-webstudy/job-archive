// import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
// import styled from "styled-components";

function JobCard({ name, body, liked }) {
  return (
    <Card height="small" width="small" background="light-1">
      <CardHeader pad="medium">{name}</CardHeader>
      <CardBody pad="medium">{body}</CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        {liked && <Button icon={<Favorite color="red" />} hoverIndicator />}
        {!liked && <Button icon={<Favorite color="black" />} hoverIndicator />}
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}

export default JobCard;

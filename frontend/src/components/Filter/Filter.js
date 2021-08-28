import {Button} from "grommet";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  right: 0;
  align-items: center;
  flex-direction: row-reverse;
`;
const Buttons = styled.div`
  width:500px;
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 18px;
  
`;

export default function Filter() {
    return (
      <Container>
        <Buttons>
          <Button color="#002548" label="인기순"></Button>
          <Button color="#002548" label="최신순"></Button>
          <Button color="#002548" label="조회순"></Button>
        </Buttons>
      </Container>
    );
}
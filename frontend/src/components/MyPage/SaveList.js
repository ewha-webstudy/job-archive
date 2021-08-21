import styled from "styled-components";
import CardBoard from "../Card/CardBoard";

const SaveListBlock = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
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

  display: flex;
  flex-wrap: wrap;
  float: right;
  margin-top: 7%;
  margin-right: 4%;
`;

const SaveList = () => {
  return (
    <SaveListBlock>
      <CardBoard />
    </SaveListBlock>
  );
};

export default SaveList;

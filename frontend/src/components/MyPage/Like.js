import styled from "styled-components";
import LikeContainer from "../../containers/MyPage/LikeContainer";

const Like = () => {
  return (
    <SaveListBlock>
      <LikeContainer />
    </SaveListBlock>
  );
};

const SaveListBlock = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    height: 80%;
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

  float: right;
  flex-wrap: wrap;
  margin-top: 4.5rem;
  margin-right: 2rem;
`;

export default Like;

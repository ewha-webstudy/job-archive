import styled from "styled-components";

import { Password } from "./Profile";

const Modal = styled.div`
  width: 500px;
  height: 500px;

  border: 2px solid pink;
  border-radius: 10px;
`;

const BodyWrapper = styled.div`
  height: 70%;
`;

const InputWrapper = styled.div`
  height: 30%;
  border-top: 2px solid powderblue;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ConfirmButton = styled.button`
  height: 30px;
  width: 260px;

  background: white;
  border: 1px solid pink;
  border-radius: 10px;

  margin-top: 20px;
`;

const Withdrawal = () => {
  return (
    <Modal>
      <BodyWrapper>정말 탈퇴하시겠습니까?</BodyWrapper>
      <InputWrapper>
        <Password />
        <ConfirmButton>탈퇴하기</ConfirmButton>
      </InputWrapper>
    </Modal>
  );
};

export default Withdrawal;

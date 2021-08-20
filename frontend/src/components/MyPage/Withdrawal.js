import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Password } from "./Profile";

const Background = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);
`;

const Modal = styled.div`
  width: 500px;
  height: 500px;

  background: white;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
  &:hover {
    cursor: pointer;
  }
  height: 30px;
  width: 260px;

  background: white;
  border: 1px solid pink;
  border-radius: 10px;

  margin-top: 20px;
`;

const Withdrawal = ({ showModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <Modal showModal={showModal}>
            <BodyWrapper>정말 탈퇴하시겠습니까?</BodyWrapper>
            <InputWrapper>
              <Password />
              <ConfirmButton>탈퇴하기</ConfirmButton>
            </InputWrapper>
          </Modal>
        </Background>
      ) : null}
    </>
  );
};

export default Withdrawal;

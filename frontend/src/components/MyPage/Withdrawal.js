import { useState } from "react";
import styled from "styled-components";
// import { useState } from "react";

const PopupBox = styled.div`
  width: 500px;
  height: 500px;
`;

const BodyWrapper = styled.div`
  height: 70%;
  background: pink;
`;

const InputWrapper = styled.div`
  height: 30%;
  background: powderblue;
`;

const Withdrawal = () => {
  //   const [showModal, setShowModal] = useState(false);

  //   const ShowModal = () => {
  //     setShowModal(true);
  //   };

  //   const CloseModal = () => {
  //     setShowModal(false);
  //   };

  return (
    <PopupBox>
      <BodyWrapper />
      <InputWrapper />
    </PopupBox>
  );
};

export default Withdrawal;

import styled from "styled-components";

const ProfileBlock = styled.div`
  width: 75%;
  height: 80%;

  margin-top: 7%;
  margin-right: 3%;

  float: right;
  background-color: white;

  display: flex;
  align-items: flex-start;
`;

const ModifyBox = styled.div`
  width: 45%;
  height: 80%;
`;

const InputWrapper = styled.div`
  & + & {
    margin-top: 80px;
  }

  width: 300px;
  height: 100px;

  margin-top: 20px;
  margin-left: 150px;

  h4 {
    color: grey;
    font-weight: lighter;

    margin-left: 10px;
  }

  input {
    width: 100%;
    height: 50%;

    background: #f5f5f5;
    border: none;
    border-radius: 15px;
    box-shadow: 0 3px 6px rgba(87, 87, 87, 0.1) inset;
  }

  input:focus {
    outline: none;
  }
`;

const ModifyButton = styled.button`
  & + & {
    margin-left: 30px;
  }

  &:hover {
    cursor: pointer;
    background: #ecbd83;
  }

  width: 100px;
  height: 40px;

  margin-left: 1200px;

  background: white;
  border: 2px solid #ecbd83;
  border-radius: 17px;
  box-shadow: 0 0px 5px rgba(87, 87, 87, 0.1);
`;

const Profile = () => {
  return (
    <>
      <ProfileBlock>
        <ModifyBox>
          <InputWrapper>
            <h4>이름</h4>
            <input />
          </InputWrapper>
          <InputWrapper>
            <h4>생년월일</h4>
            <input />
          </InputWrapper>
          <InputWrapper>
            <h4>휴대폰 번호</h4>
            <input />
          </InputWrapper>
          <InputWrapper>
            <h4>이메일</h4>
            <input />
          </InputWrapper>
        </ModifyBox>
        <ModifyBox>
          <InputWrapper>
            <h4>아이디</h4>
            <input />
          </InputWrapper>
          <InputWrapper>
            <h4>비밀번호</h4>
            <input />
          </InputWrapper>
          <InputWrapper>
            <h4>비밀번호 확인</h4>
            <input />
          </InputWrapper>
        </ModifyBox>
      </ProfileBlock>
      <ModifyButton>수정</ModifyButton>
      <ModifyButton>저장</ModifyButton>
    </>
  );
};

export default Profile;
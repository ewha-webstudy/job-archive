import styled from "styled-components";

const LoginTemplate = ({ form, children }) => {
  return (
    <Container>
      <LoginBox>
        <FormWrapper>{form}</FormWrapper>
        <LoginWrapper>{children}</LoginWrapper>
      </LoginBox>
    </Container>
  );
};

const Container = styled.div`
  height: 675px;
  margin-top: 20vh;
`;

const LoginBox = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 6px rgba(87, 87, 87, 0.1), 0 3px 6px rgba(83, 83, 83, 0.23);
  width: 700px;
  height: 350px;
  border-radius: 20px;
  margin: 0 auto;
`;

const FormWrapper = styled.section`
  padding: 1rem;
`;

const LoginWrapper = styled.section`
  min-height: 5rem;
`;

export default LoginTemplate;

import styled from "styled-components";

const MyPageTemplateBlock = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0 3px 6px rgba(87, 87, 87, 0.1), 0 3px 6px rgba(83, 83, 83, 0.23);

  width: 1200px;
  height: 800px;
  border-radius: 20px;

  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

const MyPageTemplate = ({ children }) => {
  return <MyPageTemplateBlock>{children}</MyPageTemplateBlock>;
};

export default MyPageTemplate;

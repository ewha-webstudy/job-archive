import JobCard from "./JobCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const CardBoard = () => {
  return (
    //일단 하드코딩 함 
    <Container>
      <JobCard
        name={"네이버"}
        body={"백엔드 개발자모집"}
        liked={true}
      ></JobCard>
      <JobCard
        name={"카카오"}
        body={"프론트엔드 개발자모집"}
        likd={false}
      ></JobCard>
      <JobCard></JobCard>
    </Container>
  );
};
export default CardBoard;

import JobCard from "./JobCard";
import styled from "styled-components";

const MyPageCard = ({ jobs, islogin }) => {
  return (
    <Container>
      {jobs.map((jobs, index) => (
        <CardWrapper>
          <JobCard
            key={index}
            id={jobs.wantedAuthNo}
            name={jobs.company}
            end={jobs.receiptCloseDt}
            position={jobs.wantedTitle}
            logo={jobs.logo}
            likeNo={jobs.likeNo}
            islogin={islogin}
          />
        </CardWrapper>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-left: 1rem;
  display: flex;
  width: 95%;
  padding-bottom: 4rem;
  position: relative;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  width: 190px;
  height: 250px;
  margin-left: 4rem;
  margin-top: 3.5rem;
`;

export default MyPageCard;

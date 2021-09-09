import React from "react";
import JobCard from "./JobCard";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  position: relative;
  padding: 50px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15%;
  width: 75%;
  align-items: center;
  margin: auto;
`;


const CardBoard = ({ jobs, islogin }) => {
  return (
    <>
      <Container>
        <Cards className="main">
          {jobs.map((jobs, index) => (
            <JobCard
              key={index}
              id={jobs.wantedAuthNo}
              name={jobs.company}
              end={jobs.receiptCloseDt}
              position={jobs.wantedTitle}
              logo={jobs.logo}
              likeNo={jobs.likeNo}
              islogin={islogin}
              isLiked={jobs.isLiked}
            />
          ))}
        </Cards>
      </Container>
    </>
  );
};
export default CardBoard;

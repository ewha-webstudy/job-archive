
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
  grid-gap: 10%;
  width: 75%;
  align-items: center;
  margin: auto;
`;

const ex = [
  {
    wantedAuthNo: 1,
    company: "네이버",
    end: "2021.7.30",
    likeNo: 3,
    jobCont: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    wantedAuthNo: 1,
    company: "네이버",
    end: "2021.7.30",
    likeNo: 3,
    jobCont: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "우아한형제들",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "FrontEnd Developer",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "네이버",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "카카오",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "우아한형제들",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "FrontEnd Developer",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "네이버",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "카카오",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    name: "우아한형제들",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "FrontEnd Developer",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  }
];

// api 연결되면 jobs로 데이터 받음
const CardBoard = ({ jobs }) => {
  return (
    <>
      <Container className="main">
        <Cards>
          {ex.map(jobs => (
            <JobCard
              key={jobs.wantedAuthNo}
              name={jobs.company}
              end={jobs.end}
              position={jobs.jobCont}
              logo={jobs.logo}
              likeNo={jobs.likeNo}
            />
          ))}
        </Cards>
      </Container>
    </>
  );
};
export default CardBoard;

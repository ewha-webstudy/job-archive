import React, { useState } from "react";
import JobCard from "./JobCard";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  position: relative;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15%;
  width: 75%;
  align-items: center;
  margin: 0;
`;

const ex = [
  {
    name: "네이버",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "카카오",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "우아한형제들",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "FrontEnd",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "네이버",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "카카오",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "우아한형제들",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "FrontEnd",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "네이버",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "카카오",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "우아한형제들",
    start: "2021.7.1",
    end: "2021.7.30",
    position: "FrontEnd",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
];

const CardBoard = () => {
  return (
    <Container>
      <Cards>
        {ex.map((i) => (
          <JobCard
            name={i.name}
            end={i.end}
            position={i.position}
            logo={i.logo}
          />
        ))}
      </Cards>
    </Container>
  );
};
export default CardBoard;

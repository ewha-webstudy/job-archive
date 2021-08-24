import React from "react";
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
    wantedAuthNo: "K120612108130052",
    company: "네이버",
    receiptCloseDt: "9999-01-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },
  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "9999-01-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-11-30",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  },

  {

    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-10-30",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"

  },

  {

    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-08-30",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"

  },

  {

    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"

  },

  {

    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"

  },

  {

    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"

  },

  {

    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside"
  }

];

// api 연결되면 jobs로 데이터 받음
const CardBoard = ({ jobs, logged }) => {
  return (
    <>
      <Container>
        <Cards className="main">
          {ex.map((jobs, index) => (
            <JobCard
              key={index}
              id={jobs.wantedAuthNo}
              name={jobs.company}
              end={jobs.receiptCloseDt}
              position={jobs.wantedTitle}
              logo={jobs.logo}
              likeNo={jobs.likeNo}
              logged={logged}
            />
          ))}
        </Cards>
      </Container>
    </>

  );
};
export default CardBoard;

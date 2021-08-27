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
    wantedAuthNo: "K120612108130052",
    company: "네이버",
    receiptCloseDt: "9999-01-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "9999-01-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-11-30",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-10-30",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-08-30",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },

  {
    wantedAuthNo: 1,
    company: "네이버",
    receiptCloseDt: "2021-09-01",
    likeNo: 3,
    wantedTitle:
      "AI 솔루션 개발자 모집 (웹프로그래밍 개발자 1명, AI 개발자 1명)",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
];

// *** api 연결하려면, line122의 ex-> jobs로 수정
const CardBoard = ({ jobs, islogin }) => {
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
              islogin={islogin}
            />
          ))}
        </Cards>
      </Container>
    </>
  );
};
export default CardBoard;

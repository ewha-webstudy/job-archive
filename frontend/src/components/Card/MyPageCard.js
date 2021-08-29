import JobCard from "./JobCard";
import styled from "styled-components";

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

//데이터를 받아서 카드로 보여줌
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
  margin-top: 6rem;
`;

export default MyPageCard;

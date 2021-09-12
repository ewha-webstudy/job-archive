import JobCard from "./JobCard";
import styled from "styled-components";

// 데이터를 받아서 카드로 표시
const MyPageCard = ({ likes, islogin }) => {
  return (
    <Container>
      {likes &&
        likes.map((likes, index) => (
          <CardWrapper key={index}>
            <JobCard
              key={index}
              id={likes.wantedAuthNo}
              name={likes.company}
              end={likes.receiptCloseDt}
              position={likes.wantedTitle}
              logo={likes.logo}
              likeNo={likes.likeNo}
              islogin={islogin}
              isLiked={likes.isLiked}
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
  position: relative;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  width: 190px;
  height: 200px;
  padding-top: 0.7rem;

  padding-bottom: 0.4rem;

  margin-left: 4rem;
  margin-top: 6rem;
`;

export default MyPageCard;

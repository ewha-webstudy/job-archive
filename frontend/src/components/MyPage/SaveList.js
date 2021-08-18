import JobCard from "../Card/JobCard";
import styled from "styled-components";

const SaveListBlock = styled.div`
  overflow: auto;

  width: 75%;
  height: 80%;

  margin-top: 7%;
  margin-right: 4%;

  float: right;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CardWrapper = styled.div`
  & + & {
    margin-left: 10%;
    margin-top: 25px;
  }

  width: 20%;
  height: 350px;

  margin-top: 25px;
  margin-left: 10%;
  display: flex;
  align-items: center;
`;

const dummy = [
  {
    name: "네이버",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "카카오",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "우아한형제들",
    end: "2021.7.30",
    position: "FrontEnd",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "네이버",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "카카오",
    end: "2021.7.30",
    position: "SW Engineering",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "우아한형제들",
    end: "2021.7.30",
    position: "FrontEnd",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
  {
    name: "네이버",
    end: "2021.7.30",
    position: "Data Intern",
    logo: "https://image.rocketpunch.com/company/5466/naver_logo.png?s=400x400&t=inside",
  },
];

const SaveList = () => {
  return (
    <SaveListBlock>
      {dummy.map((i) => (
        <CardWrapper>
          <JobCard
            name={i.name}
            end={i.end}
            position={i.position}
            logo={i.logo}
          />
        </CardWrapper>
      ))}
    </SaveListBlock>
  );
};

export default SaveList;

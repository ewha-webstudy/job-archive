import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar/NavBar";
import CardBoard from "../components/Card/CardBoard";
// import Filter from "../components/Filter/Filter";
import SearchBar from "../components/SearchBar/SearchBar";
import { Grommet, Box, Grid } from "grommet";
import styled from "styled-components";
import "../style/category.css";
import Category from "../components/Category/Category";
import API from "../utils/api";
import Layout from "../components/Category/CategoryLayout";

const Title = styled.span`
  background-color: #ffaf00;
  height: 45px;
  width: 70%;
  margin-top: -20px;
  border-radius: 12px;
  color: dark-gray;
  text-align: center;
  line-height: 50px;
  font-size: 1.5rem;
  opacity: 0.9;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
`;

const CategoryPage = ({match}) =>{
  const [jobs , setJobs] = useState([]);
  const [error, setError] = useState(null);

  const category_chg = match.params.category;

  const techStack = (category_chg) =>{
    if (category_chg === 'frontend')
    {
      return ['HTML', 'CSS', 'JS'];
    }
    else if (category_chg === 'backend')
    {
      return ['Ruby', 'Python', 'PHP', 'JAVA', 'scala', 'Node.js', 'REST API'];
    } 
    else
    {
      return ['Python', 'C++', 'SQL', 'TensorFlow', 'OpenGL', 'OpenCv'];
    }
  };

  const CATEGORY = [
    {
      id: 'techStack',
      title: '언어',
      tag: techStack(category_chg)
    },
    {
      id: 'enterTp',
      title: '경력',
      tag: ['관계없음', '신입', '경력' ]
    },
    {
      id: 'salary',
      title: '연봉',
      tag: ['일급', '시급', '2500만원 이하', '2500만 - 3000만', '3000만 - 3500만', '3500만 - 4000만', '4000만 - 4500만', '4500만 이상']
    },
    {
      id: 'EdubgIcd',
      title: '학력',
      tag: ['학력무관', '초졸이하', '중졸', '대졸(2~3년)', '대졸(4년)', '석사', '박사' ]
    },
    {
      id: 'region',
      title: '지역',
      tag: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
        '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']
    }
  ]

	useEffect(() => {
    const fetchContents = async () => {
      try {
        setJobs(null);
        setError(null);
        API.get(`/category/${category_chg}`).then((response) => {
          console.log(response.status);
          setJobs(response.data);
        });
      } catch (e) {
        setError(e);
      }
    }
		fetchContents();
	}, []);
 


  return (
    <div>
      <Layout
        >
          <Box gridArea="search" height="xxsmall" direction="row-reverse">
            <SearchBar />
          </Box>
          <Box
            gridArea="nav"
            background="light-2"
            width="medium"
            align="center"
            style={{marginTop: 75}}
          >
            <Title>카테고리</Title>
            {/* {console.log(match.params.category)} */}
            <Category categoryList = {CATEGORY} category_chg={category_chg}/>
          </Box>
          <Box
            overflow="scroll"
            gridArea="main"
            height="100%"
            background="light-2"
            style={{marginTop: 75}}
          >
            <CardBoard jobs={jobs}/>
            {/* {console.log({jobs})} */}
          </Box>
      </Layout>
    </div>
  );
}

export default CategoryPage;

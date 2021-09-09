import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar/NavBar";
import CardBoard from "../components/Card/CardBoard";
// import Filter from "../components/Filter/Filter";
import CategorySearch from "../components/Category/CategorySearch";
import SearchBar from "../components/SearchBar/SearchBar";
import { Grommet, Box, Grid } from "grommet";
import styled from "styled-components";
import "../style/category.css";
import Category from "../components/Category/Category";
import API from "../utils/api";
import Layout from "../components/Category/CategoryLayout";
import { CategoryCardContainer } from "../containers/CardContainer";
import {tagNum} from "../modules/tagchecker";

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
	const tagNum = useSelector(state => ({
		tagNum: state.tagchecker.tagNum
	}));
  const category_chg = match.params.category;
  const searchBar = match.params.search;
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
      id: 'enterTpCd',
      title: '경력',
      tag: ['관계없음', '신입', '경력' ]
    },
    {
      id: 'avgSal',
      title: '연봉',
      tag: ['일급', '시급', '2500만원 이하', '2500만 - 3000만', '3000만 - 3500만', '3500만 - 4000만', '4000만 - 4500만', '4500만 이상'],
    },
    {
      id: 'minEdubgIcd',
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
  const data = {
    tags: {
      techStack: [],
      enterTpCd: [],
      avgSal: [],
      region: [],
      minEdubgIcd: []
    },
    searchBar: ""
  };


	useEffect(() => {
        API.post(`api/category/${category_chg}`, data).then((response) => {
          console.log(response.status);
          setJobs(response.data);
        });
	}, []);


  return (
    <div>
      <Layout
        >
          <Box gridArea="search" height="xxsmall" direction="row-reverse">
            <CategorySearch category={match.params.category}/>
          </Box>
          <Box
            gridArea="nav"
            background="light-2"
            width="medium"
            align="center"
            style={{marginTop: 75}}
          >
            <Title>카테고리</Title>
            <Category categoryList = {CATEGORY} category_chg={category_chg} tagNum = {tagNum} searchBar= {searchBar}/>
          </Box>
          <Box
            overflow="scroll"
            gridArea="main"
            height="100%"
            background="light-2"
            style={{marginTop: 75}}
          >
            <CategoryCardContainer category_chg = {category_chg} tagNum = {tagNum} searchBar= {searchBar}/>
          </Box>
      </Layout>
    </div>
  );
}

export default CategoryPage;

import React, {useState, useEffect} from "react";
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
      id: 1,
      title: '언어',
      tag: techStack(match.params.category)
    },
    {
      id: 2,
      title: '경력',
      tag: ['관계없음', '신입', '경력' ]
    },
    {
      id: 3,
      title: '지역',
      tag: ['서울', '경기', '부산' ]
    },
    {
      id: 4,
      title: '학력',
      tag: ['고등학교 졸업', '무관', '석사 이상' ]
    }
  ]
  API.get("")
	useEffect(() => {
		const fetchContents = async () => {
			try {
				setJobs(null);
				setError(null);
				API.get("/api/category/${match.params.category}").then((response) => {
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
            {/* {console.log(match.params.category)} */}
            <Category categoryList = {CATEGORY} />
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

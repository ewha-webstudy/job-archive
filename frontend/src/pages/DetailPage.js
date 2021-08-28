import NavBar from "../components/NavBar/NavBar";
import CardBoard from "../components/Card/CardBoard";
import Filter from "../components/Filter/Filter";
import SearchBar from "../components/SearchBar/SearchBar";
import { Grommet, Box, Grid } from "grommet";
import styled from "styled-components";
import "../style/category.css";
import Category from "../components/Category/Category";
import DetailBox from "../components/Detail/Datail";

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

const DUMMY_DATA_CATEGORY = [
	{
		id: 1,
		title: '언어',
		tag: ['react', 'angular', 'vue']
	},
	{
		id: 2,
		title: '경력',
		tag: ['인턴', '신입', '경력']
	},
	{
		id: 3,
		title: '지역',
		tag: ['서울', '경기', '부산']
	},
	{
		id: 4,
		title: '학력',
		tag: ['고등학교 졸업', '무관', '석사 이상']
	}
]

const DUMMY_DATA_DETAIL = [
	{
		id: 1,
		title: '네이버 웹페이지 채용 공고',
		company: '네이버',
		career: '신입',
		edu: '석사',
		salary: {
			min: 3000,
			max: 4000,
			// 협의/ 적혀잇지 않는 경우? 
			consult: false
		},
		// srchKeywordNM?? 키워드?? 
		jobContent: '웹 페이지 개발 기타등등 어쩌고저쩌고 모두 환영',
		pref: '영어우대',
		time:'월-금 9시-18시',
		place: '서울 강남구',
		applyurl: 'http://dddd.org',
		closedate: '2021-05-03 21:00:00'
	},
	{
		id: 2,
		title: '네이버 웹페이지 채용 공고2',
		company: '네이버2',
		career: '경력',
		edu: '무관',
		salary: {
			min: 3000,
			max: 4000,
			// 협의/ 적혀잇지 않는 경우? 
			consult: false
		},
		// srchKeywordNM?? 키워드?? 
		jobContent: '웹 페이지 개발 기타등등 어쩌고저쩌고 모두 환영',
		pref: '영어우대',
		time:'월-금 9시-18시',
		place: '서울 강남구',
		applyurl: 'http://dddd.org',
		closedate: '2021-05-03 21:00:00'
	}
]

function Layout(props) {
	return (
		<Grommet>
				<Grid
					background="light-2"
					rows={["auto", "flex"]}
					columns={["auto", "flex"]}
					height="full-screen"
					gap="small"
					pad="medium"
					responsive
					areas={[
						{ name: "search", start: [0, 0], end: [1, 0] },
						{ name: "nav", start: [0, 1], end: [0, 1] },
						{ name: "main", start: [1, 1], end: [1, 1] },
					]}
				>
								{props.children}
				</Grid>
			</Grommet>
	);
}

function DetailInfoPage() {
	return (
		<div>
				<Layout>
					{/* searchBar */}
					<Box gridArea="search" height="xxsmall" direction="row-reverse">
						<SearchBar />
					</Box>
					{/* Category */}
					<Box
						gridArea="nav"
						background="light-2"
						width="medium"
						align="center"
					>
						<Title>카테고리</Title>
						<Category categoryList={DUMMY_DATA_CATEGORY} />
					</Box>
					{/* detailPage */}
					<Box
						overflow="scroll"
						gridArea="main"
						height="100%"
						background="light-2"
					>
						<DetailBox item={DUMMY_DATA_DETAIL[1]}
						/>
					</Box>
					</Layout>
		</div>
	);
}

export default DetailInfoPage;

import NavBar from "../components/NavBar/NavBar";
import CardBoard from "../components/Card/CardBoard";
import Filter from "../components/Filter/Filter";
import SearchBar from "../components/SearchBar/SearchBar";
import { Grommet, Box, Grid } from "grommet";
import styled from "styled-components";
import "../style/category.css";
import Category from "../components/Category/Category";

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

function DetailInfoPage() {
	return (
		<div>
			<header>
				<NavBar />
			</header>
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
					</Box>
				</Grid>
			</Grommet>
		</div>
	);
}

export default DetailInfoPage;

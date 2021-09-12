import { Grommet, Box, Grid } from "grommet";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

import "../style/category.css";
import NavBar from "../components/NavBar/NavBar";
import CardBoard from "../components/Card/CardBoard";
import Filter from "../components/Filter/Filter";
import DetailSearch from "../components/Detail/DetailSearch";
import Category from "../components/Category/Category";
import DetailBox from "../components/Detail/DetailBox";
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

const DUMMY_DATA_CATEGORY = [
  {
    id: 1,
    title: "언어",
    tag: ["react", "angular", "vue"],
  },
  {
    id: 2,
    title: "경력",
    tag: ["인턴", "신입", "경력"],
  },
  {
    id: 3,
    title: "지역",
    tag: ["서울", "경기", "부산"],
  },
  {
    id: 4,
    title: "학력",
    tag: ["고등학교 졸업", "무관", "석사 이상"],
  },
];

const DUMMY_DATA_DETAIL = [
  {
    wantedAuthNo: "K120612108130052",
    wantedTitle:
      "AI 솔루션 개발자 모집(웹프로그램 개발자 1명 , AI 개발자 1명, C/S 개발자 1명)",
    company: "주식회사브이씨아이",
    logo: "",
    reperNm: "",
    indTpCdNm: "",
    corpAddr: "08511 서울특별시 금천구 벚꽃로 254, 11층 1111호",
    homePg: "www.vcicorp.co.kr",
    receiptCloseDt: "9999-01-01",
    jobCont:
      "[직무내용] ㆍ웹프로그램 개발자 1명(JSP, JAVA, postgresql DB) ㆍ응용프로그램 개발자 2명 - AI 개발자 1명 : C++, win32, 카메라 제어(RTSP, OpenCV, 알고리즘 개발) - C/S 개발자 1명 : C++ DLL, C#(WPF) 클라이언트 개발(RTSP, OpenCV, FFMPEG) [우대사항] ○ OpenCV, FFMPEG 이용 가능자 ○ 네트워크 프로그래밍 ○ 실력보다 성실성 중요 [그 외 사항] ○ 연봉은 2800만원 면접 후 협의 가능합니다. ○ 월 복지금 실비지급 ** 지원자는 이력서와 자기소개서를 이메일( vcicorp@vcicorp.co.kr), 팩스는 (02-853-8332)로 지원하시기 바랍니다.",
    wantedInfoUrl:
      "http://www.work.go.kr/empDetailRedirect.do?wantedAuthNo=K120612108130052",
    empTpNm: "기간의 정함이 없는 근로계약/ 파견근로 비희망",
    enterTpCd: "N ",
    minEdubgIcd: "04",
    pfCond: "",
    salTpNm: "연봉",
    sal: "2800만원 ~ 2800만원",
    workdayWorkhrCont: "평일 : 09:30~18:30, 주 5일 근무, 평균근무시간 : 40",
    likeNo: 0,
  },
  {
    wantedAuthNo: "K120612108130052",
    wantedTitle:
      "AI 솔루션 개발자 모집(웹프로그램 개발자 1명 , AI 개발자 1명, C/S 개발자 1명)",
    company: "주식회사브이씨아이",
    logo: "",
    reperNm: "",
    indTpCdNm: "",
    corpAddr: "08511 서울특별시 금천구 벚꽃로 254, 11층 1111호",
    homePg: "www.vcicorp.co.kr",
    receiptCloseDt: "9999-01-01",
    jobCont:
      "[직무내용] ㆍ웹프로그램 개발자 1명(JSP, JAVA, postgresql DB) ㆍ응용프로그램 개발자 2명 - AI 개발자 1명 : C++, win32, 카메라 제어(RTSP, OpenCV, 알고리즘 개발) - C/S 개발자 1명 : C++ DLL, C#(WPF) 클라이언트 개발(RTSP, OpenCV, FFMPEG) [우대사항] ○ OpenCV, FFMPEG 이용 가능자 ○ 네트워크 프로그래밍 ○ 실력보다 성실성 중요 [그 외 사항] ○ 연봉은 2800만원 면접 후 협의 가능합니다. ○ 월 복지금 실비지급 ** 지원자는 이력서와 자기소개서를 이메일( vcicorp@vcicorp.co.kr), 팩스는 (02-853-8332)로 지원하시기 바랍니다.",
    wantedInfoUrl:
      "http://www.work.go.kr/empDetailRedirect.do?wantedAuthNo=K120612108130052",
    empTpNm: "기간의 정함이 없는 근로계약/ 파견근로 비희망",
    enterTpCd: "N ",
    minEdubgIcd: "04",
    pfCond: "",
    salTpNm: "연봉",
    sal: "2800만원 ~ 2800만원",
    workdayWorkhrCont: "평일 : 09:30~18:30, 주 5일 근무, 평균근무시간 : 40",
    likeNo: 0,
  },
];

const DetailInfoPage = ({ match }) => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState(null);

  const datakey = match.params.id;

  useEffect(() => {
    // const fetchContents = async () => {
    // 	try {
    // 		setContent(null);
    // 		setError(null);
    API.get(`api/jobs/${datakey}`).then((response) => {
      console.log(response.status);
      setContent(response.data);
    });
    // 	} catch (e) {
    // 		setError(e);
    // 	}
    // }
    // fetchContents();
  }, []);

  return (
    <div>
      {/* <Layout> */}
      <Grommet style={{ marginTop: 70 }}>
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
            // { name: "nav", start: [0, 1], end: [0, 1] },
            { name: "main", start: [0, 1], end: [1, 1] },
          ]}
        >
          {/* searchBar */}
          <Box gridArea="search" height="xxsmall" direction="row-reverse">
            <DetailSearch category={content.category} />
          </Box>
          {/* Category */}
          {/* <Box
						gridArea="nav"
						background="light-2"
						width="medium"
						align="center"
						style={{marginTop: 75}}
					>
						<Title>카테고리</Title>
						<Category categoryList={DUMMY_DATA_CATEGORY} />
					</Box> */}
          {/* detailPage */}
          <Box
            overflow="scroll"
            gridArea="main"
            height="100%"
            background="light-2"
            style={{ marginTop: 75 }}
          >
            <DetailBox item={content} />
          </Box>
        </Grid>
      </Grommet>
      {/* </Layout> */}
    </div>
  );
};

export default DetailInfoPage;

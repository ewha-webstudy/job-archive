import { Grommet, Title, DataTable, Box, Text, Meter } from "grommet";
import classNames from "classnames";
import React, { useState } from "react";

import API from "../../utils/api";
import classes from "./Detail.module.css";


function DetailBox({ item }) {
	// function closedate(date){
	// 	const arr = date.split("-");
	// 	console.log(arr);
	// 	return remaindTime(arr);
	// }

	// function remaindTime({arr}) {
	// 	var now = new Date(); //현재시간을 구한다. 
	// 	var open = new Date(arr[0], arr[1], arr[2], 0, 0, 0);

	// 	var nt = now.getTime(); // 현재의 시간만 가져온다
	// 	var ot = open.getTime(); // 오픈시간만 가져온다

	// 	if (nt < ot) { //현재시간이 오픈시간보다 이르면 오픈시간까지의 남은 시간을 구한다.   
	// 		let sec = parseInt(ot - nt) / 1000;
	// 		let hour = parseInt(sec / 60 / 60);
	// 		sec = (sec - (hour * 60 * 60));
	// 		let min = parseInt(sec / 60);
	// 		sec = parseInt(sec - (min * 60));

	// 		if (hour < 10) { hour = "0" + hour; }
	// 		if (min < 10) { min = "0" + min; }
	// 		if (sec < 10) { sec = "0" + sec; }
	// 		return(
	// 			<div>
	// 				{hour} : {min} : {sec}
	// 			</div>
	// 		);
	// 	} else { //현재시간이 종료시간보다 크면
	// 		// $("#d-day-hour").html('00');
	// 		// $("#d-day-min").html('00');
	// 		// $("#d-day-sec").html('00');'
	// 		return(
	// 			<div>
	// 				00: 00 : 00
	// 			</div>
	// 		);
	// 	}
	// }
	// setInterval(remaindTime, 1000);

	return (
		<section className={classes.detailBox}>
			<div className={classes.title__company}>{item.company}</div>
			<h1 className={classes.title}>{item.wantedTitle}</h1>
			{/*  태그사항 */}
			<div className={classNames({ [classes.clearfix]: true, [classes.tbBox]: true })}>
				<div className={classes.tb__title}>
					<h4 className={classes.h4}>지원자격</h4>
					<dl className={classes.tbList}>
						<dt>경력</dt>
						<dd>
							<strong class="col_1">{item.enterTpCd}</strong>
						</dd>
						<dt>학력</dt>
						<dd>
							<strong class="col_1">{item.minEdubgIcd}</strong>
						</dd>
					</dl>
				</div>
				<div className={classes.tb__title}>
					<h4 className={classes.h4}>근무조건</h4>
					<dl className={classes.tbList}>
						<dt>고용형태</dt>
						<dd>
							<ul class="addList">
								<li>
									<strong class="col_1">정규직</strong>   <span class="tahoma"></span>
								</li>
							</ul>
						</dd>
						<dt>급여</dt>
						<dd>
							{item.salTpNm} {item.sal}
						</dd>
						<dt>지역</dt>
						<dd>{item.corpAddr}					</dd>
						<dt>시간</dt>
						<dd>
							<span>{item.workdayWorkhrCont}</span>
						</dd>
					</dl>
				</div>
			</div>
			<div className={classes.apply_box}>
				<a className={classes.apply_button} href="${item.wantedInfoUrl}">홈페이지 지원</a>
				{/* <div className={classes.apply_ddayleft}> {closedate(item.receiptCloseDt)}</div> */}
			</div>
			{/* 채용공고 */}
			<h2 className={classes.h2}>직무내용</h2>
			<div className={classes.apply_content}>
				<p>

					가. 주요업무<br />
					- 영업비밀 관리체계 심화컨설팅 및 영업비밀 유출분쟁 법률자문 등<br />
					- 부정경쟁방지법 판결문 구축·분석 및 영업비밀 교육 수행 등<br />
					<br />
					나. 채용형태 : 계약일로부터∼1년(1년 단위 연장 및 재계약 가능)<br />
					<br />
					다. 응시자격 및 우대사항<br />
					- 응시자격 : 학사(4년제 정규대학 졸업) 이상의 경력이 인정되며 변리사 자격증(등록변리사) 소지자<br />
					- 우대사항 : 공공기관 근무 경력자 및 지식재산 관련 업무 경력자<br />
					<br />
					* 세부내용은 첨부된 채용 공고문 등 참고<br />
					<br />
					
					</p>
			</div>
			{/* 접수기간 및 방법 */}
			<h2 className={classes.h2}> 접수기간 및 방법 </h2>

			<div className={classNames({ [classes.clearfix]: true, [classes.apply_dday_box]: true })}>
				<div className={classes.apply_ddayleft_box}>
					<h3>남은기간</h3>
					<div className={classes.apply_ddayleft}>12일 2:19:40</div>
				</div>
				<dl className={classNames({[classes.tbList]: true, [classes.apply_dday__content]: true})}>
					<dt>시작일: </dt>
					<dd>2020.30.55</dd>
					<dt>마감일: </dt>
					<dd>2021.32.32</dd>

				</dl>
				<button className={classes.apply_button}>홈페이지 지원</button>
			</div>
			{/* 기업정보 */}
			<h2 className={classes.h2}>기업정보</h2>
			<div className={classNames({ [classes.clearfix]: true, [classes.tbBox]: true, [classes.company_box]: true})}>
				
				<h3 className={classes.h3}>(주) 우아한 형제들</h3>
				<div className={classes.tb__title}>
					<dl className={classes.tbList}>
						<dt>업종</dt>
						<dd>
							<strong class="col_1">그 외</strong>
						</dd>
						<dt>기업 구분</dt>
						<dd>
							<strong class="col_1">중견기업</strong>
						</dd>
						<dt>대표자</dt>
						<dd>
							<strong class="col_1">김병우</strong>
						</dd>
					</dl>
				</div>
				<div className={classes.tb__title}>
					<dl className={classes.tbList}>
						<dt>주소</dt>
						<dd>
						<strong class="col_1">서울 송파구 올림픽로</strong>
						</dd>
						<dt>설립일</dt>
						<dd>
							<span>2015년 6월 22일(업력 6년)</span>
						</dd>
						<dt>홈페이지</dt>
							<dd>
								<span>career.wooway.com</span>
							</dd>

					</dl>
				</div>
			</div>
			{/* 관련 태그 */}
			<div>

			</div>
		</section>
	);
}

export default DetailBox;

import React from "react";

const GetDday = end => {
  if (end === "9999-01-01") return <>{"상시 마감"}</>;
  let dday = new Date(end);
  const now = new Date();
  const distance = dday.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));

  // console.log(day);

  return <>D-{day}</>;
};

/* --- D-n일 이라면 조건부 렌더링할 예정, 아직 구현 x
const init = (end) => {
    getDDay(end);
    setInterval(getDDay, 100000);
}
init(end);
*/

export default GetDday;

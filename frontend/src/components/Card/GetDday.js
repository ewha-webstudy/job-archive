import React from "react";

const GetDday = end => {
  if (end === "9999-01-01") return <>{"상시 마감"}</>;
  let dday = new Date(end);
  const now = new Date();
  const distance = dday.getTime() - now.getTime();
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  return <>D-{day}</>;
};


export default GetDday;

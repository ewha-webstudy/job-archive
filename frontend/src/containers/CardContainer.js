import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Maincard from "../components/Card/Maincard";
//import Categorycard from "../components/Card/CategoryCard";
import API from "../utils/api";

export function MainCardContainer() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/api/main").then(response => {
      setJobs(response.data);
    });
  }, []);
  const { islogin } = useSelector(state => ({
    islogin: state.logger.islogin
  }));

  return <Maincard islogin={islogin} jobs={jobs} />;
}
/*
export function CategoryCardContainer() {
  const { islogin } = useSelector(state => ({
    islogin: state.logger.islogin
  }));

  return <Categorycard islogin={islogin} />;
}
*/

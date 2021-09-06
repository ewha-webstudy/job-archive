import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Maincard from "../components/Card/Maincard";
import Categorycard from "../components/Category/CategoryCard";
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


export function CategoryCardContainer(category_chg) {

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

  const [jobs, setJobs] = useState([]);

	useEffect(() => {
    // const fetchContents = async () => {
      // try {
        // setJobs(null);
        // setError(null);
        API.post(`api/category/${category_chg}`, data).then((response) => {
          console.log(response.status);
          setJobs(response.data);
        });
      // } catch (e) {
        // setError(e);
      // }
    // })
		// fetchContents();
	}, []);
 
  const { islogin } = useSelector(state => ({
    islogin: state.logger.islogin
  }));

  return (<div>
    <Categorycard islogin={islogin} jobs={jobs}/>
      {console.log({data})}
  </div>);
}


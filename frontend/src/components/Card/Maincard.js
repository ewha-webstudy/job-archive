import React, { useState, useEffect } from "react";
import CardBoard from "./CardBoard";
import "../../style/main.css";
import API from "../../utils/api";

// props : { logged, userId }
function MainCard({ islogin }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/api/main").then((response) => {
      console.log(response.status);
      setJobs(response.data);
    });
  }, []);

  return (
    <div className="main__card">
      <div className="card">
        {/*<CardBoard jobs={jobs} logged={logged} userId={userId} />*/}
        <CardBoard jobs={jobs} islogin={islogin} />
      </div>
    </div>
  );
}

export default MainCard;

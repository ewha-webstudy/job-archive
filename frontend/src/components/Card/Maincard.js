import React, { useState, useEffect } from "react";
import CardBoard from "./CardBoard";
import "../../style/main.css";
import API from "../../utils/api";

function MainCard({ islogin }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/api/main").then(response => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div className="main__card">
      <div className="card">
        <CardBoard jobs={jobs} islogin={islogin} />
      </div>
    </div>
  );
}

export default MainCard;

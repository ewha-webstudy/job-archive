import React, { useState, useEffect } from "react";
import CardBoard from "../components/Card/CardBoard";
import "../style/main.css";
import API from "../utils/api";

function MainCard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/api/main").then((response) => {
      console.log(response);
      setJobs(response.data);
    });
  }, []);

  return (
    <div className="main-card">
      <div className="card">
        <CardBoard jobs={jobs} />
      </div>
    </div>
  );
}

export default MainCard;

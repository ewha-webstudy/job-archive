import React, { useState, useEffect } from "react";
import CardBoard from "../components/Card/CardBoard";
import "../style/main.css";
import API from "../utils/api";

function MainCard({ logged, userId }) {
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
        <CardBoard jobs={jobs} logged={logged} userId={userId} />
      </div>
    </div>
  );
}

export default MainCard;

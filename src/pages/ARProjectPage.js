import React from "react";
import "../styles/ProjectPage.css";
import { useParams } from "react-router-dom";
import projectDataAR from "../projectDataAR";

function ARProjectPage() {
  const { id } = useParams();
  const projectInfo = projectDataAR.find((data) => data.id === id);

  return (
    <div className="projectPage">
      <iframe
        src={`https://www.youtube.com/embed/${projectInfo.video}?autoplay=1&mute=1`}
        frameborder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="projectPage-project-container">
        <div className="projectPage-project-info-container">
          <h2 className="projectPage-project-title">{projectInfo.name}</h2>
          <p className="projectPage-project-p">
            Stack:
            <span className="projectPage-project-span">
              {" "}
              {projectInfo.tools}
            </span>
          </p>
          <p className="projectPage-project-p">
            Device:
            <span className="projectPage-project-span">
              {" "}
              {projectInfo.device}
            </span>
          </p>
          <p className="projectPage-project-p">
            Github:<span className="projectPage-project-span"> Code</span>
          </p>
        </div>

        <div className="projectPage-project-info-container">
          <h2 className="projectPage-project-title">Overview</h2>
          <p className="projectPage-project-description">
            Lorem ihffhfhffghffhfhum dolor sit amet, consectetur adipisicing
            elit. Excepturi dicta neque fugiat cupiditate, ipsam inventore
            consequatur ea vel maiores dolore nulla assumenda in nostrum itaque
            numquam tenetur! Ducimus, aut ea!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ARProjectPage;

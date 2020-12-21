import React from "react";
import "../styles/ProjectPage.css";
import { useParams } from "react-router-dom";
import projectData from "../projectData";
import projectDataAR from "../projectDataAR";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
function ProjectPage() {
  const { id } = useParams();

  const projectInfo = projectData.find((data) => data.id === id);

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
          <a href={projectInfo.website}>
            <p className="projectPage-project-p">
              Website:<span className="projectPage-project-span"> Link</span>
            </p>
          </a>
          <a href={projectInfo.github}>
            <p className="projectPage-project-p">
              Github:<span className="projectPage-project-span"> Code</span>
            </p>
          </a>
        </div>

        <div className="projectPage-project-info-container">
          <h2 className="projectPage-project-title">Overview</h2>
          <p className="projectPage-project-description">
            {projectInfo.description}
          </p>
        </div>
      </div>
      {/* <img className="projectPage-images" src={projectInfo.imageOne} alt="" />
      <img className="projectPage-images" src={projectInfo.imageTwo} alt="" />
      <img className="projectPage-images" src={projectInfo.imageThree} alt="" /> */}
    </div>
  );
}

export default ProjectPage;

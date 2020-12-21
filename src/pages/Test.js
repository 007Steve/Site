import React from "react";
import "../styles/ProjectPage.css";
import { useParams } from "react-router-dom";
import projectData from "../projectData";
import projectDataAR from "../projectDataAR";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
function ProjectPage() {
  const { id } = useParams();

  const projectInfo = projectDataAR.find((data) => data.id === id);

  return (
    <div className="projectPage">
      {/* <div className="projectPage-title-container">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="projectPage-title"
        >
          {projectInfo.name}
        </motion.h2>
      </div> */}
      {/* <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 6 }}
      > */}
      <iframe
        src={`https://www.youtube.com/embed/${projectInfo.video}?autoplay=1&mute=1`}
        frameborder="0"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="text">
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
            Lorem ihffhfhffghffhfhum dolor sit amet, consectetur adipisicing
            elit. Excepturi dicta neque fugiat cupiditate, ipsam inventore
            consequatur ea vel maiores dolore nulla assumenda in nostrum itaque
            numquam tenetur! Ducimus, aut ea!
          </p>
        </div>
      </div>
      <img className="projectPage-images" src={projectInfo.imageOne} alt="" />
      <img className="projectPage-images" src={projectInfo.imageTwo} alt="" />
      <img className="projectPage-images" src={projectInfo.imageThree} alt="" />
    </div>
  );
}

export default ProjectPage;
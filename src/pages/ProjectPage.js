import React from "react";
import "../styles/ProjectPage.css";
import { useParams } from "react-router-dom";
import projectData from "../projectData";
import { motion } from "framer-motion";
function ProjectPage() {
  const { id } = useParams();
  const projectInfo = projectData.find((data) => data.id === id);
  return (
    <div className="projectPage">
      <div className="projectPage-title-container">
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="projectPage-title"
        >
          {projectInfo.name}
        </motion.h2>
      </div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 6 }}
      >
        <iframe
          width="787"
          height="1780"
          src={`https://www.youtube.com/embed/${projectInfo.video}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="projectPage-info-container">
          <div className="projectPage-info">
            <p className="projectPage-p">
              Frameworks:{" "}
              <span className="projectPage-span">{projectInfo.tools}</span>
            </p>
            <p className="projectPage-p">
              Live:{" "}
              <a href={projectInfo.website}>
                <span className="projectPage-span">Website</span>
              </a>
            </p>
            <p className="projectPage-p">
              Code:{" "}
              <a href={projectInfo.github}>
                <span className="projectPage-span">Github</span>
              </a>
            </p>
          </div>
          <div className="projectPage-description-container">
            <h3>Overview</h3>
            <p className="projectPage-description">{projectInfo.description}</p>
          </div>
        </div>

        <img src={projectInfo.backgroundPic} alt="" />
      </motion.div>
    </div>
  );
}

export default ProjectPage;

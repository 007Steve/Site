import React from "react";
import "../styles/ProjectCard.css";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function ProjectCard({ image, id }) {
  // const transition = {
  //   yoyo: Infinity,
  //   duration: 10,
  // };
  return (
    <motion.div
      animate={{ y: 54 }}
      // transition={transition}
      className="projectCard"
    >
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        {/* <Link to={`/project/${id}`}> */}
        <div className="projectCard">
          <img id="projectCard-image" src={image} alt="" />
        </div>
        {/* </Link> */}
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;

import React from "react";
import "../styles/ProjectCard.css";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
function ProjectCard({ image, id }) {
  return (
    <motion.div animate={{ y: 54 }} className="projectCard">
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="projectCard">
          <img id="projectCard-image" src={image} alt="" />
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;

import React from "react";
import "../styles/Portfolio.css";
import projectData from "../projectData";
import Card from "../components/Card";
import { motion } from "framer-motion";
function Portfolio() {
  return (
    <div className="portfolio">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Portfolio
      </motion.h2>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 2 }}
        className="portfolio-projects"
      >
        {projectData.map((data) => (
          <Card key={data.id} image={data.thumbnail} id={data.id} />
        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;

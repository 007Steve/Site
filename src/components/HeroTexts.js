import React from "react";
import "../styles/HeroTexts.css";
import { motion, animate } from "framer-motion";
function HeroTexts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 4 }}
      className="heroTexts"
    >
      <h1 className="heroTexts-title">Stephen Plummer</h1>
      <div className="heroTexts-info">
        <h3> Web Developer</h3>
        <span>|</span>
        <h3> AR/VR Developer</h3>
      </div>
    </motion.div>
  );
}

export default HeroTexts;

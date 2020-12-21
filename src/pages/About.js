import React from "react";
import "../styles/About.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="about">
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="about-title"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -5, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 3 }}
        className="about-container"
      >
        <img className="about-image" img src="/DSC_1020.jpeg" alt="" />

        <div className="about-info-container">
          <div className="">
            <p id="hi">HELLO, I'M</p>
            <p className="about-info-container-name"> Stephen Plummer</p>
          </div>

          <p className="about-info-container-p">
            I am an Front-End Developer based out of Stratford Connecticut. I
            love pushing the limits of technology such as AR/VR by creating
            engaging experiences. Some of my favorite things include coding,
            photography, and fishing.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default About;

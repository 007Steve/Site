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
          <h3 className="about-info-container-name"> Stephen Plummer</h3>
          <p className="about-info-container-p">
            My interests for web development started in 2016 when I discovered a
            company called Magic Leap which focuses on developing augmented
            reality experiences through AR glasses. The level of creativity and
            interactiveness that the website had sparked my passion for
            developing the spatial web even further. It was then I knew that
            this is where I wanted my life work to be. After years of sitting on
            the sidelines learning about the spatial web of augmented and
            virtual reality I decided to take the leap and enroll in Flatiron
            Coding Bootcamp to gain the necessary knowledge and skills needed to
            develop applications for the spatial web. This has lead me to this
            point of my journey as a Front-End developer with a passion for
            creating websites and AR/VR experiences.
          </p>
          {/* <div className="about-links-container">
            <div className="about-links">
              <LinkedInIcon />
              <p> Stephen Plummer</p>
            </div>
            <div className="about-links">
              <EmailIcon />
              <p>stephen.plummer1.sp@gmail.com</p>
            </div>
            <div className="about-links">
              <PhoneAndroidIcon />
              <p>(203) - 360 - 6814</p>
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
}

export default About;

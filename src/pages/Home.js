import React from "react";
import "../styles/Home.css";
import HeroTexts from "../components/HeroTexts";
import { motion } from "framer-motion";

function Home() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn",  }}
      className="home"
    >
     <HeroTexts />
    </motion.div>
  );
}

export default Home;

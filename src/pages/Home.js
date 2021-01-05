import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import HeroTexts from "../components/HeroTexts";
import { motion } from "framer-motion";
import Quotes from "../components/Quotes";
function Home() {
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const [show, setShow] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn",  }}
      className="home"
    >
      {show ? <Quotes /> : <HeroTexts />}
    </motion.div>
  );
}

export default Home;

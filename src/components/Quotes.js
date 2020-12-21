import React from "react";
import "../styles/Quotes.css";
import { motion } from "framer-motion";
import quotesData from "../quotesData"
function Quotes() {
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const max = quotesData.length
  const num = Math.floor(Math.random() * Math.floor(max))
  console.log(num)
  return (
    <div className="quotes">
      <div className="quotes-info">
        <motion.h4
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: -5, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="quotes-h4"
        >
          {quotesData[num].text}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 6 }}
        >
         -{quotesData[num].author} 
        </motion.p>
      </div>
    </div>
  );
}

export default Quotes;
// ″ The OASIS was much more than a game or an entertainment platform.”

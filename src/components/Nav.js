import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 45 }}
      className="nav"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="nav-link">Home</h4>
      </Link>

      <Link to="/portfolio" style={{ textDecoration: "none" }}>
        <h4 className="nav-link">Portfolio</h4>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <h4 className="nav-link">About</h4>
      </Link>

      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="nav-link">AR/VR</h4>
      </Link>
    </motion.div>
  );
}

export default Nav;
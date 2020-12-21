import React from "react";
import Tilt from "react-tilt";
import "../styles/Card.css";
import { Link } from "react-router-dom";
function Card({ image, id, name }) {
  // const transition = {
  //       yoyo: Infinity,
  //        duration: 3,
  //      };
  //      animate={{ y: 50 }}
  //        transition={transition}
  return (
    <Tilt>
      <Link to={`/${name}/${id}`}>
        <div className="card">
          <img id="card-image" src={image} alt="" />
        </div>
      </Link>
    </Tilt>
  );
}

export default Card;

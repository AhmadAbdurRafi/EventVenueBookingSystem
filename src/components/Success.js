import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="success">
      <h1>Your Booking was successful</h1>
      <Link to="/">
        <button>GO HOME</button>
      </Link>
    </div>
  );
};

export default Success;

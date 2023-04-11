import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

const Home = () => {
  const { authState } = useContext(AuthContext);
  return (
    <motion.div
      className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
    >
      <h2>Welcome to Akatsuki</h2>
      {authState.status ? (
        <Link to="/base">
          <motion.button animate={{}}>Create Your Dream Event</motion.button>
        </Link>
      ) : (
        <Link to="/login">
          <motion.button animate={{}}>Create Your Dream Event</motion.button>
        </Link>
      )}
    </motion.div>
  );
};

export default Home;

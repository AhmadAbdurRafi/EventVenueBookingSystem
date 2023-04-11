import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

const Location = () => {
  let navigate = useNavigate();
  const { location, id2 } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  useEffect(() => {
    location.map((item) => {
      if (item._id === id2) {
        setItem(item);
      }
    });
  }, []);

  return (
    <div className="location">
      <div className="head">
        <h1>{item.name}</h1>
        <h2>BDT. {item.price}</h2>
      </div>
      <p>{item.description}</p>
      <button onClick={() => navigate(`./booking`)}>Book Place</button>
    </div>
  );
};

export default Location;

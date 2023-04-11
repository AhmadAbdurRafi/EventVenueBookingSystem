import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import { urlFor, client } from "../client";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../helpers/AuthContext";

const Locations = () => {
  const { id } = useParams();
  const { location, setLocation, setId2 } = useContext(AuthContext);
  let navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = `*[_type == "picnic"]`;

    client.fetch(query).then((data) => setLocation(data));
  }, []);

  return (
    <div className="locations">
      <h1>{id}</h1>
      <label>Search</label> <br />
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <div className="grid">
        {!search
          ? location.map((item) => (
              <div
                className="card"
                onClick={() => {
                  navigate(`../../location/` + item._id);
                  setId2(item._id);
                }}
              >
                <img src={urlFor(item.imageurl)} alt="" />
                <div>
                  <h1>{item.name}</h1>
                  <p>BDT. {item.price}</p>
                </div>
              </div>
            ))
          : location
              .filter((item) => item.name.includes(search))
              .map((item) => (
                <div
                  className="card"
                  onClick={() => {
                    navigate(`../../location/` + item._id);
                    setId2(item._id);
                  }}
                >
                  <img src={urlFor(item.imageurl)} alt="" />
                  <div>
                    <h1>{item.name}</h1>
                    <p>BDT. {item.price}</p>
                  </div>
                </div>
              ))}
        {}
      </div>
    </div>
  );
};

export default Locations;

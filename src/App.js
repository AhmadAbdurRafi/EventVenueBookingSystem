import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Locations from "./components/Locations";
import Login from "./components/Login";
import Registration from "./components/Registration";
import axios from "axios";
import { AuthContext } from "./helpers/AuthContext";
import Location from "./components/Location";
import Booking from "./components/Booking";
import Success from "./components/Success";
import Payment from "./components/Payment";
import Locations2 from "./components/Locations2";
import Locations3 from "./components/Locations3";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [location, setLocation] = useState([]);
  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };
  const [id2, setId2] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ authState, setAuthState, location, setLocation, id2, setId2 }}
      >
        <Header />
        <Routes>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          ></Route>
          <Route path="success" element={<Success />}></Route>
          <Route
            path="location/:id/booking/payment"
            element={<Payment />}
          ></Route>
          <Route path="location/:id/booking" element={<Booking />}></Route>
          <Route path="/locations/restaurants" element={<Locations3 />}></Route>
          <Route
            path="/locations/Convention%20Hall"
            element={<Locations2 />}
          ></Route>
          <Route path="/location/:id" element={<Location />}></Route>
          <Route
            path="/locations/Picnic%20Spot"
            element={<Locations />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;

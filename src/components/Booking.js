import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Booking = () => {
  let navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id } = useParams();

  const checkAvailability = async () => {
    console.log(id);
    await axios
      .post("http://localhost:3001/auth/book", { date, time, id })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else if (response.data === "Success") {
          navigate("./payment");
        }
      });
  };

  return (
    <div className="success">
      Date : <input type="date" onChange={(e) => setDate(e.target.value)} />
      <br />
      Time :
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <button onClick={() => checkAvailability()}>Book</button>
    </div>
  );
};

export default Booking;

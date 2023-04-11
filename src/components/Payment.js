import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  let navigate = useNavigate();
  const [bkash, setBkash] = useState(false);
  const [nagad, setNagad] = useState(false);
  return (
    <div className="success">
      <button
        onClick={() => {
          setBkash(true);
          setNagad(false);
        }}
      >
        Bkash Payment
      </button>{" "}
      <br />
      {bkash ? (
        <>
          Transaction ID:
          <input type="text" /> <br />
          <button onClick={() => navigate("../success")}>Submit</button> <br />
        </>
      ) : (
        ""
      )}
      <button
        onClick={() => {
          setBkash(false);
          setNagad(true);
        }}
      >
        Nagad Payment
      </button>
      <br />
      {nagad ? (
        <>
          Transaction ID:
          <input type="text" /> <br />
          <button onClick={() => navigate("../success")}>Submit</button>
          <br />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Payment;

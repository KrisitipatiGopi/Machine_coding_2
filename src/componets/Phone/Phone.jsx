import React, { useState } from "react";
import "./Phone.css";
import Otp from "../Otp/Otp";

const Phone = () => {
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setIsSent(true);
  };

  return (
    <div className="mainContainer">
      <h1>OTP LOGIN</h1>
      {!isSent ? (
        <div className="innerContainer">
          <h3>Enter Mobile Number</h3>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Enter Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <Otp phone={phone} />
      )}
    </div>
  );
};

export default Phone;

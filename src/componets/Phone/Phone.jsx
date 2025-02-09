import React, { useState } from "react";
import "./Phone.css";
import Otp from "../Otp/Otp";

const Phone = () => {
  const [phone, setPhone] = useState("");
  const [optSent, setOtpSent] = useState(false);

  const handleData = (e) => {
    e.preventDefault();
    if (phone.length < 10 || phone.length > 10) {
        alert("Invalid Phone Number")
        return;
    }else{
        setOtpSent(true);
    }
  };

  return (
    <div className="mainContainer">
      {!optSent ? (
        <>
          <h1>OTP LOGIN</h1>
          <h3>Enter Your Mobile Number</h3>
          <div className="inputContainer">
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <button onClick={handleData}>Submit</button>
          </div>
        </>
      ) : (
        <div>
          <Otp phone={phone}/>
        </div>
      )}
    </div>
  );
};

export default Phone;

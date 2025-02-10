import React, { useEffect, useRef, useState } from "react";
import "./Otp.css";

const Otp = ({ phone }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef(Array(otp.length).fill(null));

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [phone]);

  const handleChangeOtp = (e, index) => {
    const value = e.target.value;
    
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h3 className="optText">OTP sent to {phone}</h3>
      <div className="otpContainer">
        {otp.map((_, index) => (
          <input
            key={index}
            type="text"
            className="input_b"
            value={otp[index]}
            onChange={(e) => handleChangeOtp(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;

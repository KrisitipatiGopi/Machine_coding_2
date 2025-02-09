import React, { useRef, useState } from "react";
import "./Otp.css";

const Otp = ({ phone }) => {
  const [opt, setOpt] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (index, e) => {
    const value = e.target.value;
    const newOtp = [...opt];
    newOtp[index] = value;
    setOpt(newOtp);

    if (value && index < 3) {
        inputRefs.current[index + 1].focus();
    }
   
    if(newOtp.every((digit) => digit !== "")){
      handleSubmit(newOtp.join(""));
    }

  };



  const handleKeyDown = (e, index) => {
    if(e.key === "Backspace" && index > 0 && !opt[index]){
      inputRefs.current[index - 1].focus();
    }
  }

  const handleSubmit = (enteredOtp) => {
    console.log(enteredOtp);
    setIsVerified(true);
  }

  return (
    <div>
      <h3>Otp Sent to the {phone} </h3>
      <div className="otpContainer">
        {opt.map((o, index) => (
          <input
            type="text"
            maxLength={1}
            key={index}
            onChange={(e) => handleChange(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            onKeyDown={(e)=>handleKeyDown(e, index)}
          />
        ))}
      </div>
      {isVerified && <p className="verified">✅ OTP Verified</p>}
    </div>
  );
};

export default Otp;

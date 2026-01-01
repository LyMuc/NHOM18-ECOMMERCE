import React, { useContext, useEffect, useState } from "react";
import OtpBox from "../../components/OtpBox";
import Button from "@mui/material/Button";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const history = useNavigate();
  const context = useContext(MyContext)

  const verityOTP = (e) => {
    e.preventDefault();

    const email = localStorage.getItem("userEmail");

    if (!email) {
      context.alertBox("error", "Missing email. Please start the verification flow again.");
      history("/register");
      return;
    }

    if (!otp || otp.length !== 6) {
      context.alertBox("error", "Please enter the 6-digit OTP.");
      return;
    }

    const actionType = localStorage.getItem("actionType");

    if (actionType !== "forgot-password") {

      postData("/api/users/verifyEmail", {
        email,
        otp: otp
      }).then((res) => {
        if (res?.error === false) {
          context.alertBox("success", res?.message);
          localStorage.removeItem("userEmail")
          history("/login")
        } else {
          context.alertBox("error", res?.message);
        }
      })
    }
    
    else{
      postData("/api/users/verify-forgot-password-otp", {
        email,
        otp: otp
      }).then((res) => {
        if (res?.error === false) {
          context.alertBox("success", res?.message);
          history("/forgot-password")
        } else {
          context.alertBox("error", res?.message);
        }
      })
    }

  }

  return (
    <section className="section py-5 lg:py-10">
      <div className="container">
        <div className="card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify3.png" width="80" />
          </div>
          <h3 className="text-center text-[18px] text-black mt-4 mb-1">
            Verify OTP
          </h3>

          <p className="text-center mt-0 mb-4">
            OTP send to{" "}
            <span className="text-[#ff5252] font-bold">{localStorage.getItem("userEmail")}</span>
          </p>

          <form onSubmit={verityOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className="flex items-center justify-center mt-5 px-3">
              <Button type="submit" className="w-full btn-org btn-lg">Verify OTP</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;

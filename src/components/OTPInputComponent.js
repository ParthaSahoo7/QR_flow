import React, { useState,useEffect } from "react";
import { sendRegisterOTP,verifyRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import OTPInput from "otp-input-react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const OTPInputComponent = ({ mobile, countryCode, qrId }) => {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Timer for the resend button
  const navigate = useNavigate();

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const handleResendOTP = async () => {
    if (!qrId) {
      toast.error('QR ID is required.');
      return;
    }

    setLoading(true);

    try {
      await sendRegisterOTP(mobile, countryCode, qrId);
      toast.success('OTP resent successfully!');
      setResendTimer(30); // Reset the timer
    } catch (error) {
      toast.error(error.message || 'Failed to resend OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP.");
      return;
    }
    setLoading(true);
    try {
      console.log(mobile, otp, countryCode, qrId);
      const response = await verifyRegisterOTP(mobile, otp, countryCode, qrId);
      // const response = { status: 200 }; 
      toast.success("OTP verified successfully!");
      if (response.status === 200) {
        navigate('/success'); // Replace with the actual path you want to redirect to
      }  else {
        toast.error('Unexpected status code received.');
      }
    } catch (error) {
      toast.error(error.message || "Failed to verify OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
    <div className="w-80 flex flex-col gap-3 rounded-lg p-1">
    <h2 className="text-center leading-normal text-white  font-serif text-4xl ">
          WELCOME TO LOYALTTY
        </h2>
      {/* <h4 className="text-center leading-normal text-white font-serif text-2xl  mb-6">
        to LOYALTTY
      </h4> */}
      <>
        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
          <BsFillShieldLockFill size={30} />
        </div>
        <h2 className="font-bold text-xl text-white text-center">Enter OTP</h2>

        <OTPInput
          value={otp}
          onChange={setOTP}
          // separator={<span className="mx-2">-</span>}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          // secure
          // inputClassName="flex-grow  h-12 border border-gray-300 rounded-md text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
          className="opt-container "
          inputClassName="focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md border border-gray-300 text-center"
        />

        <button
          onClick={handleVerifyOTP}
          // className="w-full bg-blue-500 text-white py-2 rounded mt-4 flex items-center justify-center"
          className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
          disabled={loading}
        >
          {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        <div className="text-center mt-4">
                  {resendTimer > 0 ? (
                    <p className="text-white">
                      Resend OTP in <span className="font-bold">{resendTimer}s</span>
                    </p>
                  ) : (
                    <button
                      onClick={handleResendOTP}
                      className="text-white underline hover:text-gray-200"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>
      </>
    </div>
    </section>
  );
};

export default OTPInputComponent;

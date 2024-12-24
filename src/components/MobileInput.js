import React, { useState, useEffect } from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";

const MobileInput = ({ onOTPRequest }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrId, setQrId] = useState("");

  // // Extract qr_id from the URL
  // const location = useLocation();
  // useEffect(() => {
  //   // const params = new URLSearchParams(location.search);
  //   const params = new URLSearchParams(location.search);
  //   const qr_id = params.get('qr_id');
  //   if (qr_id) {
  //     setQrId(qr_id);
  //   } else {
  //     toast.error('QR ID is missing in the URL.');
  //   }
  // }, [location]);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // // Extract the country code
    // const countryCode = `+${phone.split(' ')[0]}`;
    // const mobileNumber = phone.replace(countryCode, '').trim();

    const match = phone.trim().match(/^(\d+)\s+(.+)$/);

    
      const countryCode = match[1]; // First capture group: Country code
      const mobileNumber = match[2].replace(/[\s()]/g, ""); // Remove spaces, '(' and ')' from the mobile number

      
    

    // Extract the country code and mobile number
    // const splitIndex = phone.search(/\d/);
    // const countryCode = `+${phone.slice(0, splitIndex).replace(/[^0-9]/g, "")}`;
    // const mobileNumber = phone.slice(splitIndex).replace(/\s/g, "");

    if (!countryCode || !mobileNumber) {
      toast.error("Invalid phone number format.");
      return;
    }

    setLoading(true);

    try {
      await sendRegisterOTP(mobileNumber, countryCode, qrId);
      toast.success("OTP sent successfully!");
      onOTPRequest(mobileNumber, countryCode, qrId); // Proceed to OTP input page
    } catch (error) {
      toast.error(error.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div className="w-80 flex flex-col gap-3 rounded-lg p-1">
        <h1 className="text-center leading-normal text-white  font-serif text-5xl ">
          Welcome
        </h1>
        <h4 className="text-center leading-normal text-white font-serif text-2xl  mb-6">
          to LOYALTTY
        </h4>
        <>
          <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
            <BsTelephoneFill size={30} />
          </div>
          <label
            htmlFor=""
            className="font-bold text-xl text-white text-center"
          >
            Verify your phone number
          </label>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(value) => setPhone(value)}
          />
          <button
            onClick={handleSendOTP}
            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
            disabled={loading}
          >
            {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </>
      </div>
    </section>
  );
};

export default MobileInput;

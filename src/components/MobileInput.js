import React, { useState, useEffect } from "react";
import {  BsTelephoneFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import myImage from "./content.png";
import Logo from "./Logo";
import phoneLogo from "./Phone.png";
import welcome from "./Welcome1.png";


const MobileInput = ({ onOTPRequest,qrId }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  // const [qrId, setQrId] = useState("");
  

  // Extract qr_id from the URL
  // const location = useLocation();
  // useEffect(() => {
  //   // const params = new URLSearchParams(location.search);
  //   const params = new URLSearchParams(location.search);
  //   const qr_id = params.get('qr_id');
  //   if (qr_id) {
  //     setQrId(qr_id);
  //   } else {
  //     console.log('QR ID is missing in the URL.');
  //     // toast.error('QR ID is missing in the URL.');
  //   }
  // }, [location]);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    // const match = phone.trim().match(/^\+?(\d+)\s+(.+)$/);
    // console.log(match,phone);
    // if (!match ) {
    //   toast.error('Invalid phone number format');
    //   return;
    // }

    // // Extract the country code
    // const countryCode = `+${phone.split(' ')[0]}`;
    // const mobileNumber = phone.replace(countryCode, '').trim();

    const countryCode = phone.slice(0, -10);
    const mobileNumber = phone.slice(-10);

    console.log(countryCode, mobileNumber);
    console.log(qrId);
    

    

    
      // const countryCode = match[1]; // First capture group: Country code
      // const mobileNumber = match[2].replace(/[\s()]/g, ""); // Remove spaces, '(' and ')' from the mobile number

      
    

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
    <div className=" relative w-full h-screen bg-white flex flex-col items-center justify-center ">
      <Logo />
      <div
        className="absolute flex flex-col items-center justify-center"
        style={{
          width: "363px",
          height: "575px",
          top: "313px",
          left: "33px",
          border: "1px solid #040869 ",
          borderRadius: "20px",
        }}
      >
        <img
          src={welcome}
          alt="Welcome Logo"
          style={{
            position: "absolute",
            width: "274px",
            height: "202.9px",
            top: "17px",
            left: "42px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "248px",
            height: "38px",
            top: "220px",
            left: "48px",
          }}
        >
          <h2
            // className="text-lg font-medium text-center mb-4"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: "38px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#040869",
            }}
          >
            Welcome to Loyaltty
          </h2>
        </div>

        
        <div
          style={{
            width: "289px",
            height: "29px",
            top: "288px",
            left: "29px",
            gap: "0px",
            
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img
          src={phoneLogo}
          alt="Phone Logo"
          style={{
            
            width: "27px",
            height: "27px",
            
          }}
        />
          <div
            style={{
              width: "247px",
              height: "26px",
              top: "291px",
              left: "71px",
              gap: "0px",
              
              // position: "absolute",
            }}
          >
            
            <p
              // className="text-sm text-center mb-4"
              style={{
                fontFamily: "Playfair",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: "26.4px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                flex: 1, // Make the p tag take up the remaining space
              whiteSpace: "nowrap", // Prevent text from wrapping
               // Hide overflow
              
              }}
            >
              Verify your phone number
            </p>
          </div>
        </div>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputClass="w-full"
          inputStyle={{backgroundColor: '#EAEBFF',}}
          
          style={{width: '305px',
            height: '51px',
            top: '332px',
            left: '29px',
            gap: '0px',
            
            position: 'absolute',}}
        />
        <button
          onClick={handleSendOTP}
          // className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
          style={{width: '304px',
            height: '51px',
            top: '496px',
            left: '29px',
            gap: '0px',
            borderRadius: '9px ', // Apply the custom border radius
            
            position: 'absolute',
            backgroundColor: '#040869',
            color: 'white', // Text color
            fontFamily: 'Playfair',
    fontSize: '22px',
    fontWeight: '700',
    lineHeight: '38px',
    textAlign: 'center',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',}}
        >
          {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
          {loading ? "Sending..." : "Send OTP"}
        </button>
      </div>

      {/* <div className="relative z-10 flex justify-evenly bg-white shadow-lg rounded-lg w-2/3 p-8 gap-4"> */}
      {/* <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-125 shadow-lg rounded-lg flex w-2/3 p-8 relative z-10 gap-4 flex justify-evenly " >
        <div className="flex flex-col justify-center items-center mb-6 w-1/2">
          <img
            src={myImage}
            alt="Gift illustration"
            className=" object-cover"
          />
          <h1 className="text-center text-xl font-bold text-gray-700">
            Building Bonds, Rewarding Loyalty
          </h1>
        </div>

        <div className="  w-80 flex flex-col gap-3 rounded-lg p-1 bg-[#4169E1] p-8 justify-center items-center">
          <h2 className="text-center leading-normal text-white  font-serif text-4xl ">
            WELCOME
          </h2>
          
          <>
            <div className="bg-white text-[#F4D03F] w-fit mx-auto p-4 rounded-full">
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
              className="bg-[#F4D03F] w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
              disabled={loading}
            >
              {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        </div>
      </div> */}

      {/* <div class="flex items-center justify-center h-full">
    <h1 class="text-2xl font-bold">Welcome to the Page</h1>
  </div> */}
    </div>
  );
  
  // return (
  //   <section className="relative bg-[#E0E7FF] flex items-center justify-center h-screen">
  //     <div 
  //   className="absolute inset-0 bg-cover bg-center opacity-30" 
  //   style={{
  //     backgroundImage: `url('https://clipground.com/images/pattern-png-transparent-4.png')`,
      
  //   }}>
  // </div>
      
        
  //     <div className=" relative z-10 w-80 flex flex-col gap-3 rounded-lg p-1 bg-[#4169E1] p-8">
  //       <h2 className="text-center leading-normal text-white  font-serif text-4xl ">
  //         WELCOME TO LOYALTTY
  //       </h2>
  //       {/* <h4 className="text-center leading-normal text-white font-serif text-2xl  mb-6">
  //         to LOYALTTY
  //       </h4> */}
  //       <>
  //         <div className="bg-white text-[#F4D03F] w-fit mx-auto p-4 rounded-full">
  //           <BsTelephoneFill size={30} />
  //         </div>
  //         <label
  //           htmlFor=""
  //           className="font-bold text-xl text-white text-center"
  //         >
  //           Verify your phone number
  //         </label>
  //         <PhoneInput
  //           country={"us"}
  //           value={phone}
  //           onChange={(value) => setPhone(value)}
  //         />
  //         <button
  //           onClick={handleSendOTP}
  //           className="bg-[#F4D03F] w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
  //           disabled={loading}
  //         >
  //           {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //           {loading ? "Sending..." : "Send OTP"}
  //         </button>
  //       </>
  //     </div>
      
  //   </section>
  // );
};

export default MobileInput;

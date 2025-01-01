import React, { useState, useEffect } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { sendRegisterOTP, verifyRegisterOTP } from "../api/retailerAPI";
import { toast } from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import myImage from "./content.png";
import Logo from "./Logo";
import phoneLogo from "./Phone.png";
import gift from "./Gift.png";
import apple from "./Apple.png";
import playstore from "./Playstore.png";
import { useNavigate } from "react-router-dom";
import OTPInput from "otp-input-react";

const Example2 = () => {
  

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
          src={gift}
          alt="Gift Logo"
          style={{
            position: "absolute",
            width: "250px",
            height: "181.72px",
            top: "22px",
            left: "54px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "108px",
            height: "26px",
            top: "227px",
            left: "125px",
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
            Done !
          </h2>
        </div>

        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: "250px",
            height: "158px",
            top: "288px",
            left: "62px",
            gap: "0px",
            
            position: "absolute",
          }}
        >
         <p style={{fontFamily: "Playfair",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",}}>Select your platform <br /> (iOS or Android) below to download the app and grow your business for </p>
<span style={{fontFamily: "Playfair",
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38.4px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",}}>FREE </span> 
<p style={{fontFamily: "Playfair",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    textAlign: "center",
    textUnderlinePosition: "from-font",
    textDecorationSkipInk: "none",}}>today !</p> 
        </div>

        <div style={{width: "327px",
  height: "52px",
  position: "absolute",
  top: "493px",
  left: "18px",
  display: "flex",
  gap: "8px",
  }}>
    <button
          style={{width: "157px",
            height: "52px",
            borderRadius: "10px",
            backgroundColor: "#040869",
            display: "flex",
            justifyContent: "space-around",
            
          }}
          onClick={() => window.open("https://play.google.com/store/apps/details?id=ai.lightring.loyaltty", "_blank")}
        >
          <img
          src={playstore}
          alt="Playstore Logo"
          style={{
            paddingLeft: "4px",
            paddingTop: "10px",
            width: "40px",
            height: "40px",
            
          }}
        />
          <div className="text-white text-align-left flex flex-col p-2" >
            <p style={{fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "20px",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",}}>Get it on</p>
            <p style={{fontFamily: "Poppins, sans-serif",
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "20px",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",}}>Google Play

            </p>

          </div>
        </button>

        <button
          style={{width: "157px",
            height: "52px",
            borderRadius: "10px",
            backgroundColor: "#040869",
            display: "flex",
            justifyContent: "space-around",
            
          }}
          onClick={() => window.open("https://play.google.com/store/apps/details?id=ai.lightring.loyaltty", "_blank")}
        >
          <img
          src={apple}
          alt="Apple Logo"
          style={{
            paddingLeft: "4px",
            paddingTop: "10px",
            width: "40px",
            height: "40px",
            
          }}
        />
          <div className="text-white text-align-left flex flex-col p-2" >
            <p style={{fontFamily: "Poppins, sans-serif",
  fontSize: "12px",
  fontWeight: "600",
  lineHeight: "20px",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",}}>Get it on</p>
            <p style={{fontFamily: "Poppins, sans-serif",
  fontSize: "15px",
  fontWeight: "600",
  lineHeight: "20px",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",}}>App Store

            </p>

          </div>
        </button>

        </div>
        

        

        

        
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

  // return(<div className="relative w-full h-screen bg-[#E0E7FF] flex items-center justify-center">
  //   {/* Partially Above and Below Blue Circle */}
  //   <div className="absolute -top-8 -left-24 w-96 h-96">
  //     {/* Below Part */}
  //     <div className="absolute inset-0 bg-blue-500 rounded-full z-0"></div>
  //     {/* Above Part */}
  //     <div className="absolute inset-0 bg-blue-500 rounded-full z-20 " style={myStyle}></div>
  //   </div>

  //   {/* Partially Above and Below Yellow Circle */}
  //   <div className="absolute top-0 right-0 w-64 h-64">
  //     {/* Below Part */}
  //     <div className="absolute inset-0 bg-yellow-400 rounded-bl-full z-0"></div>
  //     {/* Above Part */}
  //     <div className="absolute inset-0 bg-yellow-400 rounded-bl-full z-20 " style={myStyle}></div>
  //   </div>

  //   {/* Background Pattern */}
  //   <div
  //     className="absolute inset-0 bg-cover bg-center opacity-30 z-10"
  //     style={{
  //       backgroundImage: `url('https://clipground.com/images/pattern-png-transparent-4.png')`,
  //     }}
  //   ></div>

  //   {/* Main Content */}
  //   <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-125 shadow-lg rounded-lg flex w-2/3 p-8 relative z-10 gap-4 justify-evenly">
  //     {/* Left Section with Image */}
  //     <div className="flex flex-col justify-center items-center mb-6 w-1/2">
  //       <img
  //         src={myImage}
  //         alt="Gift illustration"
  //         className="object-cover"
  //       />
  //       <h1 className="text-center text-xl font-bold text-gray-700">
  //         Building Bonds, Rewarding Loyalty
  //       </h1>
  //     </div>

  //     {/* Right Section with Form */}
  //     <div className="w-80 flex flex-col gap-3 rounded-lg p-1 bg-[#4169E1] p-8 justify-center items-center">
  //       <h2 className="text-center leading-normal text-white font-serif text-4xl">
  //         WELCOME
  //       </h2>
  //       <div className="bg-white text-[#F4D03F] w-fit mx-auto p-4 rounded-full">
  //         <BsTelephoneFill size={30} />
  //       </div>
  //       <label
  //         htmlFor=""
  //         className="font-bold text-xl text-white text-center"
  //       >
  //         Verify your phone number
  //       </label>
  //       <PhoneInput
  //         country={"us"}
  //         value={phone}
  //         onChange={(value) => setPhone(value)}
  //       />
  //       <button
  //         onClick={handleSendOTP}
  //         className="bg-[#F4D03F] w-full flex gap-1 items-center justify-center py-2.5 text-black rounded"
  //         disabled={loading}
  //       >
  //         {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
  //         {loading ? "Sending..." : "Send OTP"}
  //       </button>
  //     </div>
  //   </div>
  // </div>
  // )
};

export default Example2;

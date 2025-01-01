
import { FaApple, FaGooglePlay, FaGlobe } from "react-icons/fa";
import { AiFillApple, AiFillAndroid, AiOutlineGlobal } from 'react-icons/ai';
import { TiTick } from "react-icons/ti";
import React from "react";




const Header = () => {
  // return (
  //   <header className="flex justify-center items-center  p-4 space-x-4">
  //     {/* iOS App Store Button */}
  //     <button
  //       className="flex items-center space-x-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
  //       onClick={() => window.open("https://apps.apple.com", "_blank")}
  //     >
  //       <FaApple className="text-lg" />
  //       <span>iOS App</span>
  //     </button>

  //     {/* Google Play Store Button */}
  //     <button
  //       className="flex items-center space-x-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
  //       onClick={() => window.open("https://play.google.com/store", "_blank")}
  //     >
  //       <FaGooglePlay className="text-lg" />
  //       <span>Play Store</span>
  //     </button>

  //     {/* Website Button */}
  //     <button
  //       className="flex items-center space-x-2 px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md"
  //       onClick={() => window.open("https://yourwebsite.com", "_blank")}
  //     >
  //       <FaGlobe className="text-lg" />
  //       <span>Website</span>
  //     </button>
  //   </header>
  // );


//   return (
//     <header className="flex justify-center items-center p-4 space-x-4">
//       {/* iOS App Store Button */}
//       <button
//         className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
//         onClick={() => window.open("https://apps.apple.com", "_blank")}
//       >
//         <FaApple className="text-lg" />
//         <span className="hidden sm:block">iOS App</span>
//       </button>

//       {/* Google Play Store Button */}
//       <button
//         className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
//         onClick={() => window.open("https://play.google.com/store", "_blank")}
//       >
//         <FaGooglePlay className="text-lg" />
//         <span className="hidden sm:block">Google Play</span>
//       </button>

//       {/* Website Button */}
//       <button
//         className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
//         onClick={() => window.open("https://yourwebsite.com", "_blank")}
//       >
//         <FaGlobe className="text-lg" />
//         <span className="hidden sm:block">Website</span>
//       </button>
//     </header>
// );



return (
  <section className="relative bg-[#E0E7FF] flex items-center justify-center h-screen">
    <div 
    className="absolute inset-0 bg-cover bg-center opacity-30" 
    style={{
      backgroundImage: `url('https://clipground.com/images/pattern-png-transparent-4.png')`,
      
    }}></div>
      <div className="relative z-10 flex flex-col gap-6">
      <div className=" text-[#05B709] w-fit mx-auto  rounded-full animate-bounce"><TiTick size={100} />  </div>
  <h1 className="text-center text-[#4169E1] font-medium text-5xl ">
              Done!
            </h1>
            <h2 className="text-center text-[#4169E1] font-medium text-2xl ">
              "Choose your platform (iOS, Android, or Website) and Create your
              Bussiness to get started"
            </h2>
  <header className="flex justify-center items-center  space-x-4">
    {/* iOS App Store Button */}
    <button
      className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
      onClick={() => window.open("https://apps.apple.com/in/app/loyaltty-merchant/id6471106229?platform=iphone", "_blank")}
    >
      <AiFillApple className="text-2xl sm:text-3xl shadow-lg" />
      <span className="hidden sm:block">iOS App</span>
    </button>

    {/* Google Play Store Button */}
    <button
      className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-green-500 hover:bg-green-600 rounded-md"
      onClick={() => window.open("https://play.google.com/store/apps/details?id=ai.lightring.loyaltty", "_blank")}
    >
      <AiFillAndroid className="text-2xl sm:text-3xl shadow-lg" />
      <span className="hidden sm:block">Play Store</span>
    </button>

    {/* Website Button */}
    {/* <button
      className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
      onClick={() => window.open("https://yourwebsite.com", "_blank")}
    >
      <AiOutlineGlobal className="text-2xl sm:text-3xl shadow-lg" />
      <span className="hidden sm:block">Website</span>
    </button> */}
  </header>
  </div>
  </section>
  
  
);
};

export default Header;

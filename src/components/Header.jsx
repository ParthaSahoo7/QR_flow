import React from "react";
import { FaApple, FaGooglePlay, FaGlobe } from "react-icons/fa";
import { AiFillApple, AiFillAndroid, AiOutlineGlobal } from 'react-icons/ai';



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
  <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
  <h2 className="text-center text-white font-medium text-2xl">
              👍OnBoarding Success
            </h2>
            <h2 className="text-center text-white font-medium text-2xl">
              "Choose your platform (iOS, Android, or Website) and Create your
              Bussiness to get started"
            </h2>
            <br></br>
  <header className="flex justify-center items-center p-4 space-x-4">
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
    <button
      className="flex items-center sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 px-4 py-2 text-white bg-gray-500 hover:bg-gray-600 rounded-md"
      onClick={() => window.open("https://yourwebsite.com", "_blank")}
    >
      <AiOutlineGlobal className="text-2xl sm:text-3xl shadow-lg" />
      <span className="hidden sm:block">Website</span>
    </button>
  </header>
  </div>
  </section>
  
  
);
};

export default Header;

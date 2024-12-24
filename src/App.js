import React, { useState,useEffect } from 'react';
import MobileInput from './components/MobileInput';
import OTPInputComponent from './components/OTPInputComponent';
import {toast, Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
// import OTPInputComponent from './components/OTPInputComponent';

const App = () => {
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [qrId, setQrId] = useState('');

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
    
  

  const handleOTPRequest = (mobile, countryCode) => {
    setMobile(mobile);
    setCountryCode(countryCode);
    setIsOTPSent(true);
  };

  return (
    <div>
      <Toaster />
      {!isOTPSent ? (
        <MobileInput onOTPRequest={handleOTPRequest} />
      ) : (
        <OTPInputComponent mobile={mobile} countryCode={countryCode} qrId={qrId}/>
      )}
    </div>
  );
};

export default App;

//////////////


// import React from 'react';
// import OTPInputComponent from './components/OTPInputComponent';


// const App = () => {
//   const qrId= 'someQrId'; // Replace with actual logic to get qrId
//   const mobile = '1234567890'; // Replace with actual mobile number
//   const countryCode = '91'; // Replace with actual country code

//   return (
//     <div>
//       <OTPInputComponent mobile={mobile} countryCode={countryCode} qrId={qrId} />
//     </div>
//   );
// };

// export default App;







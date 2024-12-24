import React, { useState ,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { sendRegisterOTP } from '../api/retailerAPI';
import { toast } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';

const MobileInput = ({ onOTPRequest }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
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
  

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      toast.error('Please enter a valid phone number.');
      return;
    }

    

    // // Extract the country code
    // const countryCode = `+${phone.split(' ')[0]}`;
    // const mobileNumber = phone.replace(countryCode, '').trim();

    // Extract the country code and mobile number
    const splitIndex = phone.search(/\d/);
    const countryCode = `+${phone.slice(0, splitIndex).replace(/[^0-9]/g, '')}`;
    const mobileNumber = phone.slice(splitIndex).replace(/\s/g, '');

    if (!countryCode || !mobileNumber) {
      toast.error('Invalid phone number format.');
      return;
    }

    setLoading(true);

    try {
      await sendRegisterOTP(mobileNumber, countryCode,qrId);
      toast.success('OTP sent successfully!');
      onOTPRequest(mobileNumber, countryCode,qrId); // Proceed to OTP input page
    } catch (error) {
      toast.error(error.message || 'Failed to send OTP.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-80 p-4 border rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Enter Mobile Number</h2>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={(value) => setPhone(value)}
          
        />
        <button
          onClick={handleSendOTP}
          className="w-full bg-blue-500 text-white py-2 rounded mt-4 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <CgSpinner className="animate-spin mr-2" /> : null}
          {loading ? 'Sending...' : 'Send OTP'}
        </button>
      </div>
    </div>
  );
};

export default MobileInput;

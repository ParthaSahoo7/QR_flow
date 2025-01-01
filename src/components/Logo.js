import React from 'react';
import logo from './logo.png';

function Logo() {
  return (
    <div className="flex flex-col items-center mb-8 bg-white">
      <img src={logo} alt="Loyaltty Logo" className="absolute mb-4" style={{width: "122.79px", height:"165.58px",top:"89px",left:"153px"}} />
      
    </div>
  )
}

export default Logo
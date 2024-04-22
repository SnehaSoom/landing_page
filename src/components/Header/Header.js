import React from 'react';
import logo1 from '../Asset/gtd_logo.png';
import logo2 from '../Asset/img_lisa_circle.png';
import logo3 from '../Asset/img_danielle_circle.png';
import logo4 from '../Asset/img_brian_circle.png';
import './Header.css';

const Header = () => {
  const logoArray = [ logo2, logo3, logo4];

  return (
    <>
      <div className='container'>
      <div className='rowHeader'>
      <img src={logo1} alt="Logo" />
      </div>
      </div>
      <div className='headerContainer'>
       <div className='imageContainer'>
       {logoArray.map((logo, index) => (
          <img key={index} src={logo} alt={`Image ${index + 1}`} />
        ))}
       </div>
      </div>
    </>
  );
}

export default Header;

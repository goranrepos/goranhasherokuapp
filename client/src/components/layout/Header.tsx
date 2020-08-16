import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from 'assets/svgs/gn-logo.svg';

import Navbar from 'components/layout/Navbar';

const Header: React.FC = () => {
  return (
    <header>
      <Link to='/' className='sitelogo'>
        <img
          src={SiteLogo}
          alt='GN Logo, Home'
          role='img'
          className='sitelogo__img'
        />
      </Link>
      <Navbar />
      {/* <nav>
        <ul className='nav__ul'>
          <li className='nav__li'>Home</li>
          <li className='nav__li'>About</li>
          <li className='nav__li'>Resources</li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;

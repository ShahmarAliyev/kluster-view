import React from 'react';
import './navbar.scss';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Kluster View</div>
      <div className='options'>
        <Link href='#home'>Home</Link>
        <Link href='#demo'>Demo</Link>
        <Link href='#team'>Team</Link>
        <Link href='https://github.com/oslabs-beta/ECRI-40-OSP-4'>Github</Link>
        <Link href='#home'>Linkedin</Link>
      </div>
    </div>
  );
};

export default Navbar;

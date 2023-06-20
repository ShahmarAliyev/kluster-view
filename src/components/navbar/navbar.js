'use client';
import React, { useState } from 'react';
import './navbar.scss';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const [drowDown, setDrowDown] = useState(false);
  return (
    <div className={'navbar ' + (drowDown && 'active')}>
      <div className='logo'>
        <Image src='/img/navlogo.png' width={50} height={50} alt='' />
      </div>
      <div className='options'>
        <div className='menus'>
          <Link href='#home'>Home</Link>
          <Link className='startNav' href='#getStarted'>
            Get Started
          </Link>
          <Link href='#demo'>Demo</Link>
          <Link href='#team'>Team</Link>
        </div>
        <div className='logos'>
          <Link href='https://github.com/oslabs-beta/ECRI-40-OSP-4'>
            <Image alt='' src='/img/githubNav.png' width={32} height={32} />
          </Link>
          <Link href='https://github.com/oslabs-beta/ECRI-40-OSP-4'>
            <Image alt='' src='/img/linkedinNav.png' width={32} height={32} />
          </Link>
        </div>
      </div>
      <div
        className='burgerIcon'
        onClick={() => {
          setDrowDown(!drowDown);
        }}
      >
        <Image
          className='burger-img'
          src='/img/menu.png'
          width={30}
          height={30}
          alt=''
        />
      </div>
      <ul
        onClick={() => {
          console.log(' click test');
          setDrowDown(!drowDown);
        }}
        className={'burger' + ' ' + (drowDown && 'active')}
      >
        <li>
          <Link href='#home'>Home</Link>
        </li>
        <li>
          <Link href='#getStarted'>Get Started</Link>
        </li>
        <li>
          <Link href='#demo'>Demo</Link>
        </li>
        <li>
          <Link href='#team'>Team</Link>
        </li>
        <li>
          <Link href='https://github.com/oslabs-beta/ECRI-40-OSP-4'>
            Linkedin
          </Link>
        </li>
        <li>
          <Link href='https://github.com/oslabs-beta/ECRI-40-OSP-4'>
            Github
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

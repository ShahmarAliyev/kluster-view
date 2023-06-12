import React from 'react';
import './footer.scss';
import Image from 'next/image';
const Footer = () => {
  return (
    <div id='team' className='footer'>
      <h2>Meet The Team</h2>
      <div className='github'>
        <div className='person'>
          <span>Jonathan Tsai</span>
          <Image alt='' src='/img/john.png' width={200} height={200} />
          <div className='buttons'>
            <Image alt='' src='/img/github.png' width={32} height={32} />
            <Image alt='' src='/img/linkedin.png' width={32} height={32} />
          </div>
        </div>
        <div className='person'>
          <span>Kyle Slugg</span>

          <Image alt='' src='/img/kyle.png' width={200} height={200} />
          <div className='buttons'>
            <Image alt='' src='/img/github.png' width={32} height={32} />
            <Image alt='' src='/img/linkedin.png' width={32} height={32} />
          </div>
        </div>{' '}
        <div className='person'>
          <span>Mike Nunn</span>

          <Image alt='' src='/img/mike.png' width={200} height={200} />
          <div className='buttons'>
            <Image alt='' src='/img/github.png' width={32} height={32} />
            <Image alt='' src='/img/linkedin.png' width={32} height={32} />
          </div>
        </div>{' '}
        <div className='person'>
          <span>Shahmar Aliyev</span>

          <Image alt='' src='/img/shahmar.png' width={200} height={200} />
          <div className='buttons'>
            <Image alt='' src='/img/github.png' width={32} height={32} />
            <Image alt='' src='/img/linkedin.png' width={32} height={32} />
          </div>
        </div>
      </div>
      <div className='copyright'>
        <span>©2023 Kluster View</span>
        <span>This project is licensed under the MIT License. </span>
      </div>
    </div>
  );
};

export default Footer;

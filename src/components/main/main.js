import Image from 'next/image';
import React from 'react';
import './main.scss';
const Main = () => {
  return (
    <div id='home' className='main'>
      <div className='logo'>
        <Image alt='' src='/img/logo1.png' width={350} height={200} />
      </div>
      <div className='desc'>
        <h1>Kubernetes Visualization Tool</h1>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Main;

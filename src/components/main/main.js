import Image from 'next/image';
import React from 'react';
import './main.scss';
import Link from 'next/link';
const Main = () => {
  return (
    <div id='home' className='main'>
      <div className='logo'>
        <Image alt='' src='/img/test.png' width={300} height={200} />
      </div>
      <div className='desc'>
        <h1>Kubernetes Visualization Tool</h1>
      </div>
      <button>
        <Link href='https://github.com/oslabs-beta/KlusterView'>
          Get Started
        </Link>
      </button>
    </div>
  );
};

export default Main;

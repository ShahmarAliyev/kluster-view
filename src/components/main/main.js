import Image from 'next/image';
import React from 'react';
import './main.scss';
import Link from 'next/link';
const Main = () => {
  return (
    <div id='home' className='main'>
      <div className='logo-container'>
        <h1 className='logo-title'>
          Kluster<span>View</span>
        </h1>
        <div className='logo'>
          <Image
            className='logoImg'
            alt=''
            src='/img/Klusterview_Nowords.png'
            // width={450}
            // height={430}
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
      </div>
      <div className='desc'>
        <h1>Kubernetes Visualization Tool</h1>
        <p>
          Visualize, Monitor, and Optimize Kubernetes Clusters with our Powerful
          Visualization Tool.
        </p>
        <div className='buttons'>
          <button>
            <Link href='https://github.com/oslabs-beta/KlusterView'>
              Get Started
            </Link>
          </button>
          <button>
            <Link href='#demo' className='button-demo'>
              See a Demo
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;

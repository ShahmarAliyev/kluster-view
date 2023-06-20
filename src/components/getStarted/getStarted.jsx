'use client';

import React from 'react';
import './getStarted.scss';
import Image from 'next/image';
const GetStarted = () => {
  const commands = [
    'git clone https://github.com/oslabs-beta/KlusterView.git',
    'docker build -f Dockerfile-dev -t klusterview/dev',
  ];
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.parentNode.parentNode.innerText);
  };
  return (
    <div id='getStarted' className='getStarted'>
      <h1>Getting Started</h1>
      <p className='getStarted-tagline'>
        <span>KlusterView</span> was created with you,{' '}
        <span>the developer</span>, in mind. That's why our setup process can be
        implemented in a matter of minutes, so you can get back to focusing on
        what's important.
      </p>
      <div className='cards'>
        <div className='card-container'>
          <h3 className='card-step'>
            <span>Step One</span>
          </h3>
          <div className='card card-one'>
            <p>Clone</p>
            <span className='desc'>
              Clone the KlusterView repository by executing the following
              command in your terminal.
            </span>
            <div className='code'>
              {commands[0]}
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className='imgWrapper'
              >
                <Image
                  src='/img/copy.png'
                  alt=''
                  height={24}
                  width={24}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='card-container'>
          <h3 className='card-step'>
            Step <span>Two</span>
          </h3>
          <div className='card'>
            <p>Scripts</p>
            <span className='desc'>
              From the project's scripts directory, execute ./setup.sh with root
              user permissions. This will intruct Kubectl to install KlusterView
              and its dependencies using the manifests.
            </span>
          </div>
        </div>
        <div className='card-container'>
          <h3 className='card-step'>
            Step <span>Three</span>
          </h3>
          <div className='card'>
            <p>Open Browser</p>
            <span className='desc'>
              KlusterView will run on Port 31001 of each node. To display the
              application, access this port via your web browser.
            </span>
          </div>
        </div>
        <div className='card-container'>
          <h3 className='card-step'>
            Step <span>Four</span>
          </h3>
          <div className='card'>
            <p>Development</p>
            <span className='desc'>
              Use the command below to work in development mode. Once loaded,
              the development server may be accessed on Port 31002.
            </span>
            <div className='code'>
              {commands[1]}
              <div
                onClick={(e) => {
                  handleClick(e);
                }}
                className='imgWrapper'
              >
                <Image src='/img/copy.png' alt='' height={24} width={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

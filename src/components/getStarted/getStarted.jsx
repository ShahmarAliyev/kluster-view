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
      <p>Clone</p>
      <span>Clone the KlusterView repository</span>
      <div className='code'>
        {commands[0]}
        <div
          onClick={(e) => {
            handleClick(e);
          }}
          className='imgWrapper'
        >
          <Image src='/img/copy.png' alt='' height={24} width={24} />
        </div>
      </div>
      <p>Scripts</p>
      <span className='desc'>
        From the project's scripts directory, execute ./setup.sh with root user
        permissions. This will intruct Kubectl to install KlusterView and its
        dependencies using the manifests.
      </span>
      <p>Open Browser</p>
      <span>
        KlusterView will run on Port 31001 of each node. To display the
        application, access this port directly via your web browser,
      </span>

      <p>Development</p>
      <span className='desc'>
        To work in development mode command below. Once loaded, the development
        server may be accessed on
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
  );
};

export default GetStarted;

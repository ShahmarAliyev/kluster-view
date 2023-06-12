import React from 'react';
import './demo.scss';
import Image from 'next/image';
const Demo = () => {
  return (
    <div id='demo' className='demo'>
      <div className='demo1'>
        <div className='gif1'>
          <Image alt='' src='/img/resr.gif' width={800} height={500} />
        </div>
        <div className='desc'>
          <h2>
            Checkout Important Kluster Metrics In Your Kubernetes Cluster.
            Monitor Specific Pods and identify any bottlenecks
          </h2>
        </div>
      </div>
      <div className='demo1'>
        <div className='desc'>
          <h2>
            Checkout Important Kluster Metrics In Your Kubernetes Cluster.
            Monitor Specific Pods and identify any bottlenecks
          </h2>
        </div>
        <div className='gif1'>
          <Image alt='' src='/img/resr.gif' width={800} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Demo;

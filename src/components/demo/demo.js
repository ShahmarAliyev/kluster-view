import React from 'react';
import './demo.scss';
import Image from 'next/image';
const Demo = () => {
  return (
    <div id='demo' className='demo'>
      <h1>
        Visualization Made <span>Simple.</span>
      </h1>
      <div className='demo1'>
        <div className='gif1'>
          <Image alt='' src='/img/kluster.gif' width={640} height={400} />
        </div>
        <div className='desc'>
          <h2 className='desc-title'>Monitor Your Important Metrics</h2>
          <div className='gif-pad'>
            <Image alt='' src='/img/kluster.gif' width={640} height={400} />
          </div>
          <h3>
            No time wasted configuring your dashboard or developing queries.
            <span> KlusterView</span> has streamlined this process.
          </h3>
          <h3 className='desc-black'>
            Instantly monitor pod and kluster level CPU usage, memory usage, pod
            status, number of replicas, and IP adresses.
          </h3>
        </div>
      </div>
      <div className='demo1'>
        <div className='desc'>
          <h2 className='desc-title-black'>View Your Node Structures</h2>
          <div className='gif-pad'>
            <Image alt='' src='/img/status.gif' width={640} height={400} />
          </div>
          <h3>
            Understand the heirarchical organization of the nodes and pods
            within your kluster.{' '}
          </h3>
          <h3 className='desc-black'>
            Detect unresponsive pods and <span>eliminate bottlenecks</span> in
            the development pipeline
          </h3>
        </div>
        <div className='gif1'>
          <Image alt='' src='/img/status.gif' width={640} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Demo;

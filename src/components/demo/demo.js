import React from 'react';
import './demo.scss';
import Image from 'next/image';
const Demo = () => {
  return (
    <div id='demo' className='demo'>
      <div className='demo1'>
        <div className='gif1'>
          <Image alt='' src='/img/kluster.gif' width={800} height={500} />
        </div>
        <div className='desc'>
          <h2>
            Checkout Important Metrics In Your Kubernetes Cluster. Monitor Pod
            and Kluster level CPU and Memory Usage, Pod Status, Number of
            Replicas, Ip Adresses and identify any bottlenecks
          </h2>
        </div>
      </div>
      <div className='demo1'>
        <div className='desc'>
          <h2>
            The node graph visualization provides up-to-the-minute information
            on the status of pods, including their namespace, pod IP, host, and
            job details. This immediate data availability empowers users to make
            informed decisions and efficiently manage their distributed system.
          </h2>
        </div>
        <div className='gif1'>
          <Image alt='' src='/img/status.gif' width={800} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Demo;

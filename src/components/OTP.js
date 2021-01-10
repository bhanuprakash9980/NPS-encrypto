import React, { Fragment } from 'react';
import OTPAlgo from './algos/OTP';
import OTPabout from './about/OTP';
const OTP = () => {
  return (
    <Fragment>
      <div className='row'>
        <div className='col s12'>
          <ul className='tabs'>
            <li className='tab col s6 '>
              <a href='#test1' className='green-text'>
                OTP Encryption/Decryption
              </a>
            </li>
            <li className='tab col s6'>
              <a href='#test2' className='green-text'>
                About Algorithm
              </a>
            </li>
          </ul>
        </div>
        <div id='test1' className='col s12'>
          <OTPAlgo />
        </div>
        <div id='test2' className='col s12'>
          <OTPabout />
        </div>
      </div>
    </Fragment>
  );
};

export default OTP;

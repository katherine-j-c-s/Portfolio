import React from 'react';
import Spline from '@splinetool/react-spline';
import { Floating } from './Floating';

export default function SplineScene() {
  return (
    <div className='w-full h-full md:h-96 relative  overflow-hidden'>
      {/* <Floating> */}
        <div className="w-full h-full">
          <Spline
            scene="https://prod.spline.design/yfQiAXT8uwWJgJay/scene.splinecode"
            style={{ 
              width: '100%', 
              height: '100%',
              // position: 'absolute',
              // top: '-50px',
              // left: '-100px',
              transform: 'scale(1.1) translateX(-150px) translateY(0px) rotate(18deg)',
              transformOrigin: 'center',
            }}
          />
        </div>
      {/* </Floating> */}
    </div>
  );
}
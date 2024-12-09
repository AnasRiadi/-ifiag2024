import React from 'react'
import ShortCut1 from './ShortCut/ShortCut1';
import ShortCut2 from './ShortCut/ShortCut2';
import ShortCut3 from './ShortCut/ShortCut3';
import ShortCut4 from './ShortCut/ShortCut4';
import ShortCut5 from './ShortCut/ShortCut5';
import ShortCut6 from './ShortCut/ShortCut6';
function ShortCut() {
  return (

      <div className="second-col">
                <h6 className="title">
                    your shortcuts
                </h6>
                
                <div className="menu-item">
                    <ShortCut1/>
                    <ShortCut2/>
                    <ShortCut3/>
                    <ShortCut4/>
                    <ShortCut5/>
                    <ShortCut6/>
                </div>
            </div>
  )
}

export default ShortCut ;

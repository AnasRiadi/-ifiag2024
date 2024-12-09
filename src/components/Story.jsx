import React from 'react'
import Story1 from './Story/Story1';
import Story2 from './Story/Story2';
import Story3 from './Story/Story3';
import Story4 from './Story/Story4';
import Story5 from './Story/Story5';
import Story6 from './Story/Story6';
function Stroy() {
  return (
    <>
      
      <div className="stories">
                <div className="owl-controls">
                    <div className="owl-nav">
                        <div className="controllers nxtBtn">
                            <img src="img/icons/arrow-right.svg" alt />
                        </div>
                    </div>
                </div>
                <div className="owl-carousel owl-theme slider">
                  <Story1/>
                    {/**/}
                    <Story2/>
                    {/**/}
                    <Story3/>
                    {/**/}
                    <Story4/>
                    {/**/}
                    <Story5/>
                    {/**/}
                    <Story6/>
                    {/**/}
                </div>
            </div>

      
    </>
  )
}

export default Stroy ;

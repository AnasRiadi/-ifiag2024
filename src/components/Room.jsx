import React from 'react'
import Room1 from './Room/Room1';
import Room2 from './Room/Room2';
import Room3 from './Room/Room3';
import Room4 from './Room/Room4';
import Room5 from './Room/Room5';
import Room6 from './Room/Room6';
import Room7 from './Room/Room7';

function Room() {
  return (
    <div>
      <div className="create-post view smaller-margin">
                    <div className="upper">
                        <div className="title">
                            <div className="icon">
                                <img src="img/icons/video-room.svg" alt />
                            </div>
                            <span>Rooms</span>
                        </div>
                        <a href>
                            create
                        </a>
                    </div>
                    <div className="owl-carousel owl-theme rooms">
                        <Room1/>
                        {/**/}
                        <Room2/>
                        {/**/}
                        <Room3/>
                        {/**/}
                        <Room4/>
                        {/**/}
                        <Room5/>
                        {/**/}
                        <Room6/>
                        {/**/}
                        <Room7/>
                        {/**/}
                    </div>
                </div>

    </div>
  )
}

export default Room ;

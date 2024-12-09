import React from 'react'
import AddFriend1 from './AddFriend/AddFriend1';
import AddFriend2 from './AddFriend/AddFriend2';
import AddFriend3 from './AddFriend/AddFriend3';
import AddFriend4 from './AddFriend/AddFriend4';

function AddFriend() {
  return (
    
      <div className="view friends smaller-margin">
                    <div className="upper">
                        <h6>people you may know</h6>
                        <div className="dots">
                            <div className="dot" />
                        </div>
                    </div>
                    <div className="owl-carousel owl-theme people">
                        <AddFriend1/>
                        {/**/}
                        <AddFriend2/>
                        {/**/}
                        <AddFriend3/>
                        {/**/}
                        <AddFriend4/>
                        {/**/}
                    </div>
    </div>
  )
}

export default AddFriend ;

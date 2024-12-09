import React from "react";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";

function Pages() {
  return (
    <div className="shortcuts shortcuts-2">
      <div className="second-col first-col">
        <div className="menu-item">
          <div className="upper">
            <h6>Your pages</h6>
          </div>
        </div>

        <Page1/>

        <Page2/>

        <Page3/>
      </div>
    </div>
  );
}

export default Pages;

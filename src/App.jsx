/* create 2 radio buttons and should be able to switch between the radio buttons. 1 component should be made for 1st radio button which it should consist of 2 input fields and one submit button and one reset button. in the same way, the 2nd radio button component should have 2 checkboxes with submit and reset button (both submit and reset button should be in a disabled state when there are no values in the input box and even checkbox checked. and reset should have reset functionality where it has set it to its initial state) -- */
import React, { useState } from "react";
import "./App.css";
import Couresoul from "./component/Couresoul";

function App() {

  return (
  
      <div className="App-header">
        <Couresoul/>

      </div>

  );
}
export default App;
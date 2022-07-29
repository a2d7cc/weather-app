import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./shared/Header/Header";
import PopUp from "./shared/PopUp/PopUp";

function App() {
  return (
    <div className="App">
      {/* <PopUp /> */}
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;

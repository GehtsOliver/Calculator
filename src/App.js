import React from "react"

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import SolarPanel from "./components/SolarPanel";
import ProductKey from "./components/ProductKey";
import Display from "./components/Display";
import KeyPad from "./components/KeyPad";
import StateProvider from "./HOC/StateProvider";

const App = () => {
  

  return (
    <StateProvider>
    <div className="App">
      <Body>
        <Header />
        <SolarPanel />
        <ProductKey />
        <Display/>
        <KeyPad/>
      </Body>
    </div>
    </StateProvider>
  );
};

export default App;

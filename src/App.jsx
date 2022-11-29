import React from "react";
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Wallet from "./components/Wallet";

function App() {

  return (
    <>
      <div>
        <Home />
        <Wallet />
        <About />
      </div>
    </>

  );
}

export default App;

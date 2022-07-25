import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./pages/Header";
import Home from "./pages/Home"
import OdsMeuBairro from "./pages/OdsMeuBairro";
import Ods4 from "./pages/Ods4";
import Ods8 from "./pages/Ods8";
import Ods15 from "./pages/Ods15";
import Footer from "./pages/Footer"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;}`


export default function App(){
  return(
    <Router>
    <GlobalStyle/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/OdsMeuBairro" element={<OdsMeuBairro/>}/>
      <Route path="/Ods4" element={<Ods4/>}/>
      <Route path="/Ods8" element={<Ods8/>}/> 
      <Route path="/Ods15" element={<Ods15/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}
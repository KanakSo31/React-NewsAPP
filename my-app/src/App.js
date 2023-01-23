import './App.css';
import React, { Component } from 'react';
import Navbar from './components/NavBar'; 
import News from './components/News'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div className='container-flex'>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/"><News pageSize = {6} country= "in" category = "general"/></Route>
            <Route path="/business"><News pageSize = {6} country= "in" category = "business"/></Route>
            <Route path="/entertainment"><News pageSize = {6} country= "in" category = "entertainment"/></Route>
            <Route path="/health"><News pageSize = {6} country= "in" category = "health"/></Route>
            <Route path="/science"><News pageSize = {6} country= "in" category = "science"/></Route>
            <Route path="/sport"><News pageSize = {6} country= "in" category = "sport"/></Route>
            <Route path="/technology"><News pageSize = {6} country= "in" category = "technology"/></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
};
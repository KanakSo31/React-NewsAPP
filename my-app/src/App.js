import './App.css';
import React, { Component } from 'react';
import Navbar from './components/NavBar'; 
import News from './components/News'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
            <Route path="/" element={<News pageSize = {6} country= "in" category = "general"/>} />
            <Route path="/business" element={<News pageSize = {6} country= "in" category = "business"/>}/>
            <Route path="/entertainment" element={<News pageSize = {6} country= "in" category = "entertainment"/>}/>
            <Route path="/health" element={<News pageSize = {6} country= "in" category = "health"/>}/>
            <Route path="/science" element={<News pageSize = {6} country= "in" category = "science"/>}/>
            <Route path="/sports" element={<News pageSize = {6} country= "in" category = "sports"/>}/>
            <Route path="/technology" element={<News pageSize = {6} country= "in" category = "technology"/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
};
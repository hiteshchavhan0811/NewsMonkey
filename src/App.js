import './App.css';
import React,{Component} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import News from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
  

export default class App extends Component {
  render() {
    return(
      <>
        <Router>
        <Navbar/>
        <div className=" container">
        <Routes>
            <Route exact path="/entertainment" element={<News key="entertainment" location = "in" newsType="entertainment" pageSize={12}/>}/>
            <Route exact path="/sport" element={<News key="sport" location = "in" newsType="sport" pageSize={12}/>}/>
            <Route exact path="/technology" element={<News key="technology" location = "in" newsType="technology" pageSize={12}/>}/>
            <Route exact path="/science" element={<News key="science" location = "in" newsType="science" pageSize={12}/>}/>
            <Route exact path="/health" element={<News key="health" location = "in" newsType="health" pageSize={12}/>}/>
            <Route exact path="/business" element={<News key="business" location = "in" newsType="business" pageSize={12}/>}/>
            <Route exact path="/food" element={<News key="food" location = "in" newsType="food" pageSize={12}/>}/>
            <Route exact path="/" element={<News key="top" location = "in" newsType="general" pageSize={12}/>}/>

            <Route exact path="/us" element={<News key="us" location = "us" newsType="general" pageSize={12}/>}/>
            <Route exact path="/gb" element={<News key="gb" location = "gb" newsType="general" pageSize={12}/>}/>
            <Route exact path="/au" element={<News key="au" location = "au" newsType="general" pageSize={12}/>}/>
            <Route exact path="/ch" element={<News key="ch" location = "ch" newsType="general" pageSize={12}/>}/>
            <Route exact path="/ru" element={<News key="ru" location = "ru" newsType="general" pageSize={12}/>}/>
            <Route exact path="/nz" element={<News key="nz" location = "nz" newsType="general" pageSize={12}/>}/>
            <Route exact path="/za" element={<News key="za" location = "za" newsType="general" pageSize={12}/>}/>
        </Routes>
        </div>
        <Footer/>
        </Router>
      </>
    );
  }
}
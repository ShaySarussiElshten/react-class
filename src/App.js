import logo from './logo.svg';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Child from './Components/Child/Child';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AuthContext from './context/AuthContext'
import ChildOfChild from './Components/ChildOfChild/ChildOfChild'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import InfoScreen from './Screens/InfoScreen';


function App() {


  //npm i react-router-dom
  //npm i react-roter@5.2.0

  

  return (
  <>
       <BrowserRouter>  
            <Switch>
              <Route path="/" render={()=> <HomeScreen/>} exact/>
              <Route path="/info/:id" render={()=> <InfoScreen/>} exact/> 
              <Route path="*" render={()=> <Redirect to='/' />} />
            </Switch>
       </BrowserRouter> 

    </>
  );
}

export default App;

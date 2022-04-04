import logo from './logo.svg';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Child from './Components/Child/Child';
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import AuthContext from './context/AuthContext'
import ChildOfChild from './Components/ChildOfChild/ChildOfChild'



function App() {
 
  const [counter,setCounter] = useState(true)
   
 

  

  return (
    <>
      {counter ? <Child /> : <ChildOfChild />}
      <button onClick={() => setCounter(!counter)}>
         click change component
      </button>
    </>
  );
}

export default App;

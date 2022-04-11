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
import { useRef } from 'react';
import useFetch from './hooks/useFetch'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() 
{

  const [isLoading,data] = useFetch('https://jsonplaceholder.typicode.com/posts','GET',5000)

  console.log(`isLoading:${isLoading}`)
  console.log(`data:${data}`)

  return (
    <>
     {isLoading ? 
     <ClipLoader color={'#ffffff'} loading={true} css={override} size={150} /> :
      data.map((el) => <li>{el.title}</li>)
     }
     <Child />
    </>
  );
}

export default App;

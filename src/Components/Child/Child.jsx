import React,{useState,useEffect, useRef} from 'react'
import ChildOfChild from '../ChildOfChild/ChildOfChild'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import useFetch from '../../hooks/useFetch'
import Styledw from './Chiled.style'

const Child = ({value}) => {


  return (
    <>
      <Styledw.Wrapper>
        <Styledw.Title>yamimaaa is the best</Styledw.Title>
      </Styledw.Wrapper>
    </>
  )
}

export default Child
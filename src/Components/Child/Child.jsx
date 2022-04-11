import React,{useState,useEffect, useRef} from 'react'
import ChildOfChild from '../ChildOfChild/ChildOfChild'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import useFetch from '../../hooks/useFetch'

const Child = ({value}) => {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;
  
  
  const [isLoading,data] = useFetch('https://jsonplaceholder.typicode.com/posts/1/comments','GET',3000)
  return (
    <>
    {isLoading ? 
      <ClipLoader color={'#ffffff'} loading={true} css={override} size={150} /> :
       data.map((el,i) => <li>{i}</li>)
      } 
   </>
  )
}

export default Child
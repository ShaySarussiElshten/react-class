import React,{useState,useEffect} from 'react'
import ChildOfChild from '../ChildOfChild/ChildOfChild'

const Child = ({value}) => {

  useEffect(()=>{
    console.log('hey child')
    
    return () =>{
       console.log('remove child')
    }
     
  },[])

  return (
      <div>
          <h1>hello child</h1>
      </div>
  )
}

export default Child
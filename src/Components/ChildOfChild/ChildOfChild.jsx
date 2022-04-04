import React,{useContext,useEffect} from 'react'
import AuthContext from '../../context/AuthContext'


const ChildOfChild = () => {
  const auth = useContext(AuthContext)

  useEffect(()=>{
    console.log('hey ChildOfChild')
    
    return () =>{
       console.log('remove ChildOfChild')
    }
     
  },[])
  
  return (
    <div>
        <h1>hello child of child</h1>
     
    </div>
  )
}

export default ChildOfChild
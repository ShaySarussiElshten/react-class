import React,{useEffect, useRef, useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'


const InfoScreen = () => {
  
  const history = useHistory();
  const {id} = useParams()
  const [myId,setMyId] =useState(id)


  const persons = [
    {id:1,name:"yossi"},
    {id:2,name:"gabi"},
  ]

  const [person,setPerson] = useState(null)
  

  useEffect(()=>{
      searchPerson()
  },[myId])


  
  
  const searchPerson=()=>{
     const personMatch = persons.find(person => person.id === Number(myId)) 
     setPerson(personMatch)
  }

  const changePerson=()=>{
     setMyId(2)
  }




  return (
    <>
      <button onClick={changePerson}>click</button>
      <h1>InfoScreen {person?.name} </h1>
    </>
  )
}

export default InfoScreen
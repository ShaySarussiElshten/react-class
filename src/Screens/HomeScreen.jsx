import React from 'react'
import {Link,useHistory} from 'react-router-dom'


const HomeScreen = (props) => {

  const history = useHistory();

  console.log(history)

  const handleClick =()=>{
       console.log('jjjj')
       console.log('jjjj')
       console.log('jjjj')
       console.log('jjjj')
       console.log('jjjj')
       console.log('jjjj')
       history.push('/info')
  }

  
  console.log(props)
  return (
    <>
       <button onClick={handleClick} >
          click me
       </button>
       <Link to="/info">
            link to info
       </Link>
    </>
  )
}

export default HomeScreen
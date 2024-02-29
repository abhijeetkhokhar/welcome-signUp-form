import React, { useState } from 'react'
import Introduction from './Introduction'
import Parent from './components/Parent'
import SignUP from './components/SignUP'
import User from './components/User';
export default function App() {
  const [data,setData]=useState([]);
  function userData(res){
      setData([...data,...res]);
  }
  return (
    <>
    <Parent>
        <SignUP userdata={userData}/>
    </Parent>
    <User data={data}/>
    </>
  )
}

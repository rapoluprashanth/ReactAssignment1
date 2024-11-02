import React, { useState } from 'react'
import ReactAss1 from './ReactAss1';

const ReactAssig1:React.FC = () => {
  const [count,setCount]=useState(0);
  const increF=()=>{
  setCount(count+1);
  }
  const decreF=()=>{
  setCount(count-1);
  }
  return (
    <>
       <ReactAss1 increF={increF} decreF={decreF} count={count} />
    </>
  )
}

export default ReactAssig1
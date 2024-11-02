import React from 'react'

interface operation{
  count:number
  increF:()=>void
  decreF:()=>void
}
const ReactAss1:React.FC<operation> = ({count,increF,decreF}) => {
  return (
    <>
    <h1>Counter Demo</h1>
    <h1>counter: {count}</h1>
    <button onClick={increF}>Increment</button>
    <button onClick={decreF}>Decrement</button>
    </>
  )
}

export default ReactAss1
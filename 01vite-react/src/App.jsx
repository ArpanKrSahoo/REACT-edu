
import React, { useState } from 'react';
import Chai from './chai.jsx'

function App() {
const username= 'Arpan'
//hooks used to manage state in functional components
// useState is a hook that returns an array with two elements: the current state and a function to update that state
// const [state, setState] = useState(initialState)
// Here, we initialize a state variable `count` with an initial value of 0 and
// a function `setCounter` to update that state variable.
// The useState hook is used to manage state in functional components.
// It allows you to add state to functional components, which was previously only possible in class components
// The `useState` hook returns an array with two elements: the current state and a
const [count, setCounter]=useState(0)

// let count = 0
const addValue = () => {
  setCounter(count+1)
  console.log(count)
}
const removeValue = () => {
  setCounter(count-1)
  console.log(count)
}
if (count < 0) {
  setCounter(0)
  console.log('Count cannot be negative')
  return null;  
}else if(count>20){
  setCounter(20)
  console.log('Count cannot be more than 20')
  return null;   // This condition prevents the count from exceeding 20
}
// if (count < 0) {
//   count = 0
//   console.log('Count cannot be negative')
//   return null;  
// }else 

return (
  <>
  <Chai/>
  <p>HI your name is {username}</p> 
  <h3>Count Value:{count}</h3>
  <button onClick={addValue}>ADD value</button>
  <button onClick={removeValue}>REMOVE Value</button>
  </>
)
}

export default App

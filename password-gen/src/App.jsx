import { useEffect, useCallback, useState } from 'react'
import './App.css'

function App() {
  
const[length, setLength] = useState(8); // Example length variable
const[password, setPassword] = useState(""); // Example password variable
const[numberAllowed, setNumberAllowed] = useState(false); // Example number allowed variable
const[characterAllowed, setCharacterAllowed] = useState(false); // Example character allowed variable
 

const generatePassword = useCallback(() => {
  let newPassword = "";
  
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numberAllowed) chars += "0123456789";
  if (characterAllowed) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

  for (let i = 0; i < length; i++) {
    newPassword += chars.charAt(Math.floor(Math.random() * chars.length+1));
  }
  setPassword(newPassword);
}, [length, numberAllowed, characterAllowed,setPassword]);

useEffect(() => {
  generatePassword();
}, [length, numberAllowed, characterAllowed, generatePassword]);

return ( 
  <>
 {/* <div className='h-screen bg-red-400 text-white text-center text-2xl font-bold mt-5 mb-5'>
<div className=' w-full max-w-2xl mx-auto mt-5 mb-5 text-center shadow-lg p-5 rounded-lg bg-grey-100 shadow-lg'>
<h1 className='flex text-4xl text-center mt-5 fs-1 fw-bold  text-black p-5 rounded-lg '>Password Genereter </h1>
  <div className='inline-flex flex-col items-center justify-center'>
  <input type="text"
  value={password}
  className='w-full max-w-2xl mx-auto text-center bg-white text-black text-center text-2xl font-bold mt-5 mb-5 text-black p-5 rounded-lg shadow-lg'
  readOnly
  placeholder='Generated Password'
  />
  <button className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0 rounded-lg '>copy</button>
  
  
  </div>
  <div className='flex text-dm gap-x-2 text-size-sml'>
    <div className='flex items-center gap-x1 mt-5 mb-5'>
      <input 
      type="range"
      min={6}
      max={20}
      value={length}
      onChange={(e) => setLength(e.target.value)}
      />
           <label>Length:{length}</label>
    </div>
    <div className='flex items-center gap-x1'>
      <input 
      type="checkbox"
      checked={numberAllowed}
      onChange={()=> {
        setNumberAllowed((prev)=>!prev)}}
      />
      <label htmlFor="number">Number</label>
    <div className='flex items-center gap-x1'>
      <input 
      type="checkbox"
      checked={characterAllowed}
      onChange={()=> {
        setCharacterAllowed((prev)=>!prev)}}
      />
      <label htmlFor="number">Character</label>
    </div>
  </div>
</div>
  
 </div>
 </div> */}

 <div className="app-container">
  <div className="password-card">
    <h1>Password Generator</h1>
    <input type="text" className="password-display" value={password} readOnly />
    <button className="copy-btn" onClick={() => {
      window.navigator.clipboard.writeText(password);
    }}>Copy</button>

    <div className="controls">
      <div className="control-item">
        <label>Length: {length}</label>
        <input type="range" min={6} max={20} value={length} onChange={(e) => setLength(e.target.value)} />
      </div>
      <div className="control-item">
        <label>Numbers</label>
        <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
      </div>
      <div className="control-item">
        <label>Characters</label>
        <input type="checkbox" checked={characterAllowed} onChange={() => setCharacterAllowed((prev) => !prev)} />
      </div>
    </div>
  </div>
</div>

 </>
 )
}

export default App

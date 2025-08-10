import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'

// const reactElement =React.createElement(
//   'a',
//   { href: 'https://react.dev',target: '_blank' },
//   'Learn React'
// )
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  //  reactElement
   <App />
)

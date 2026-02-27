import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Button() {
  return(
    <button>Click Me</button>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'click me to know more'
// }

const ReactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'visit google now'
)

createRoot(document.getElementById('root')).render(
  
   // ReactElement
   <App /> 
  
)

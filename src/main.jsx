// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// import { HooksApp } from './HooksApp'
import './08-useReducer/intro-reducer'

import './index.css'
import { MainApp } from './09-useContext/MainApp'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <HooksApp />
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  // </StrictMode>
)

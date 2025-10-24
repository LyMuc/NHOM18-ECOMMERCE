import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './about_us/about_us.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutUs />
  </StrictMode>,
)

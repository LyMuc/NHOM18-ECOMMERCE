import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ContactUs from './contact_us.jsx'
import Login from './login.jsx'
import SignUp from './sign_up.jsx'
import AboutUs from './about_us.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AboutUs />
    </>
  )
}

export default App;

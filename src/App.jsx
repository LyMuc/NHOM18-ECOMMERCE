import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import AboutUs from './about_us/about_us.jsx'
import Login from './login/login.jsx'
import SignUp from './sign_up/sign_up.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp />
    </>
  )
}

export default App;

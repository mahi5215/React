import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About  from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import PersonProp from './components/PersonProp.jsx'
import Olx from './components/Olx.jsx'
// import back from '../assets/back.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="frame">
    <Olx/>
     <Olx/>
     <Olx/>
     <Olx/>
     <Olx/>
    </div>
     {/* <Navbar/>
     <Home />
     <About />
     <Contact/> */}
     {/* <PersonProp name="Mahi" city="pune"/>
     <PersonProp name="Pooja" city="Nagar"/> */}
     
    </>
  )
}

export default App

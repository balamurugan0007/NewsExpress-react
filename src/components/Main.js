import React from 'react'

import Navbar1 from './navbar/Navbar1'
import Carousal from './components/Carousal'
import Feedback from './components/Feedback'
import Home from './pages/Home'

const Main = () => {
  return (
    <div>
        <Navbar1/>
        <Carousal/>
        <Home/>
        <Feedback/>
      
    </div>
  )
}

export default Main

import { useState } from 'react'
import './App.css'
import HamburgerMenu from './components/shared/HamburgerMenu'
import Logo from './components/shared/Logo'
import Home from './Home'
import Footer from './components/shared/Footer'

function App() {

  return (
    <div className="App">
      <Logo />
      <HamburgerMenu />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App

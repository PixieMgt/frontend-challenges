import { useState } from 'react'
import './App.css'
import HamburgerMenu from './components/HamburgerMenu'
import Logo from './components/Logo'
import Home from './Home'

function App() {

  return (
    <div className="App">
      <Logo />
      <HamburgerMenu />
      <div className="content">
        <Home />
      </div>
    </div>
  )
}

export default App

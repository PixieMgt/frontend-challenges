import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HamburgerMenu from './components/shared/HamburgerMenu'
import Logo from './components/shared/Logo'
import Footer from './components/shared/Footer'
import Home from './Home'
import AboutUs from './AboutUs'
import NotFound from './NotFound'

function App() {

  return (
    <Router>
      <div className="App">
        <Logo />
        <HamburgerMenu />
        <div className="content">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App

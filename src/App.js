import React , {useState} from 'react'
import Overlay from "./components/Sections/Overlay";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Places from './pages/Places';


function App() {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggleOverlay = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Router>
      <Header toggleOverlay = {toggleOverlay}/>
      <Overlay isOpen={isOpen} onClose = {toggleOverlay} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;

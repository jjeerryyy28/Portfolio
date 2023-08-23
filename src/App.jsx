import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'; 
import { Skills } from './components/Skills'; 
import { Projects } from './components/Projects'; 
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { About } from './components/AboutMe'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<>
            <NavBar />
            <Banner />
            <Contacts />
            <Footer />
          </>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

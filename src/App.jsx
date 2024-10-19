import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/common/Banner';
import Navbar from './components/Navbar/Navbar';
import Home from './components/common/Home';
import Background from './components/common/Background';
import Contact from './components/common/Contact';
import Portfolio from './components/common/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-DeepNightBlack flex'>
        <Sidebar />
          <Routes>
            <Route path="/" element={<Banner content={<Home />} />} />
            <Route path="/background" element={<Banner content={<Background />} />} />
            <Route path="/contact" element={<Banner content={<Contact />} />} />
            <Route path="/portfolio" element={<Banner content={<Portfolio />} />} />
          </Routes>
          <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;

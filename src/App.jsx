import React from 'react'
import './scss/global.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//IMPORT COMPONENTS AND ROUTES
import Header from './components/Header/Header.jsx';
import Home from './components/Routes/Home.jsx';
import DonatedBook from './components/Routes/DonatedBooks.jsx';
import Donate from './components/Routes/Donate.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Donate'> Donate</Link></li>
          <li><Link to='/DonatedBook'> Donated Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/DonatedBook' element={<DonatedBook />} />
      </Routes> 
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
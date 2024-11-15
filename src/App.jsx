import React from 'react'
import './scss/global.scss'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//IMPORT COMPONENTS AND ROUTES
import Header from './components/Header/Header.jsx';
import Home from './components/Routes/Home/Home.jsx';
import DonatedBook from './components/Routes/DonatedBook/DonatedBook.jsx';
import Donate from './components/Routes/Donate/Donate.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/Donate'> Donate</Link>
          <Link to='/DonatedBooks'> Donated Books</Link>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/DonatedBooks' element={<DonatedBook />} />
      </Routes> 
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
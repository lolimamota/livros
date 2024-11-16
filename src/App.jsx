import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//IMPORT IMAGES
import Logo from '@assets/header-img/livrologo.png';
import Lupa from '@assets/header-img/lupa.png'

//IMPORT ROUTES

import Home from './pages/Home';
import Donate from './pages/Donate';
import DonatedBooks from './pages/DonatedBooks';

function App() {
  return (
    <BrowserRouter>
      <section>
        <img src={Logo} alt="Logo do site Livros vai na web, onde apresenta um livro aberto com as folhas com a impressão de estarem sendo foleadas" />
        <h1>Livros Vai Na Web</h1>
      </section>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/DonatedBooks">Donated Books</Link></li>
        <li><Link to="/Donate">Donate</Link></li>
      </nav>
      <section>
        <input type="search" name="search" id="search" />
        <img src={Lupa} alt="Imagem de uma lupa, indicando o campo de busca do site" />
      </section>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/DonatedBooks' element={<DonatedBooks />}/>
        <Route path='/Donate' element={<Donate />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
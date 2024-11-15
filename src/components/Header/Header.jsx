import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//IMPORT ROUTES
import Home from '../Routes/Home.jsx';
import DonatedBook from '../Routes/DonatedBooks.jsx';
import Donate from '../Routes/Donate.jsx';


//IMPORT IMAGES
import Logo from '@assets/header-img/livrologo.png';
import Lupa from '@assets/header-img/lupa.png';

//IMPORT STYLES
import S from '@styles/styleComponents/header/header.module.scss';

function Header() {
  return (
    <header className={S.Header}>
      <section>
      <img src={Logo} alt="Imagem de um livro sendo foleado" />
      <h1>Livros Vai Na Web</h1>
      </section>
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
      <section>
        <input type="search" name="search" id="search" placeholder='Digite aqui sua busca' />
        <button><img src={Lupa} alt="Imagem de lupa branca" />
        </button>
      </section>
    </header>
  )
}

export default Header
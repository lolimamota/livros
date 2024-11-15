import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';


//IMPORT ROUTES
// import Home from '../Routes/Home.jsx';
// import Donate from '../Routes/Donate.jsx';
// import DonatedBook from '../Routes/DonatedBooks.jsx';

//IMPORT IMAGES
import Logo from '@assets/header-img/livrologo.png';
import Lupa from '@assets/header-img/lupa.png';

//IMPORT STYLES
import S from '@styles/styleComponents/header/header.module.scss';
// import Router from '../Routes/Router';


function Header() {
  return (
    <section className={S.Header}>
      <section>
        <img src={Logo} alt="Imagem de um livro sendo foleado" />
        <h1>Livros Vai Na Web</h1>
      </section>
      <BrowserRouter>
      <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Donate'> Donate</Link></li>
            <li><Link to='/DonatedBooks'> Donated Books</Link></li>
          </ul>
        </nav>
        </BrowserRouter>
      <section>
        <input type="search" name="search" id="search" placeholder='Digite aqui sua busca' />
        <button><img src={Lupa} alt="Imagem de lupa branca" />
        </button>
      </section>
    </section>
  )
}

export default Header
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './scss/global.scss';

//IMPORT DE ESTILOS
import S from './scss/styleComponents/routes/style-routes.module.scss';

//IMPORT IMAGES
import Logo from '@assets/header-img/livrologo.png';
import Lupa from '@assets/header-img/lupa.png'

//IMPORT ROUTES

import Home from './pages/Routes/Home.jsx';
import Donate from './pages/Routes/Donate.jsx';
import DonatedBooks from './pages/Routes/DonatedBooks.jsx';

//IMPORT COMPONENTS
import Footer from './pages/footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <section id={S.styleBrowser}>
        <div className={S.divLogo}>
          <img src={Logo} alt="Logo do site Livros vai na web, onde apresenta um livro aberto com as folhas com a impressão de estarem sendo foleadas" className={S.wLogo} />
          <h1>Livros Vai Na Web</h1>
        </div>
        <nav className={S.navigation}>
          <ul className={S.ulFlex}>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Donate">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/DonatedBooks">
                Donated Books
              </Link>
            </li>
          </ul>
        </nav>
        <form className={S.divInput}>
          <input type="text" className={S.searchInput} placeholder="O que você procura?" />
          <button  className={S.searchSubmt}>
            <img src={Lupa} alt="Imagem de uma lupa, indicando o campo de busca do site" className={S.wLupa} />
          </button>
        </form>
      </section>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DonatedBooks' element={<DonatedBooks />} />
        <Route path='/Donate' element={<Donate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
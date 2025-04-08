import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './scss/global.scss';

//IMPORT DE ESTILOS
import S from './scss/styleComponents/routes/style-routes.module.scss';

//IMPORT IMAGES
import Logo from '@assets/header-img/livrologo.png';
import Lupa from '@assets/header-img/lupa.png'
import MenuOn from '@assets/header-img/menu.png'
import MenuOff from '@assets/header-img/close.png'

//IMPORT ROUTES
import Home from './pages/Routes/Home.jsx';
import Donate from './pages/Routes/Donate.jsx';
import DonatedBooks from './pages/Routes/DonatedBooks.jsx';

//IMPORT COMPONENTS
import Footer from './pages/footer/Footer.jsx';

// Componente de navegação separado para usar o hook useNavigate
function Navigation({ menuOpen, closeMenu, setSearchQuery, searchQuery }) {
  const navigate = useNavigate();
  const [inputExpanded, setInputExpanded] = useState(false);

  const expandInput = () => {
    setInputExpanded(!inputExpanded);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/DonatedBooks?search=${encodeURIComponent(searchQuery.trim())}`);
      closeMenu();
    }
  }

  return (
    <nav className={`${S.navigation} ${menuOpen ? S.menuOpen : S.menuClosed}`}>
      <button className={S.closeBtnMenu} onClick={closeMenu}>
        <img className={S.widthImg} src={MenuOff} alt="X para fechar o menu" />
      </button>
      <ul className={S.ulFlex}>
        <li>
          <Link to="/">
            Início
          </Link>
        </li>
        <li>
          <Link to="/DonatedBooks">
            Livros Doados
          </Link>
        </li>
        <li>
          <Link to="/Donate">
            Quero Doar
          </Link>
        </li>
      </ul>
      <form className={S.divInput} onSubmit={handleSearch}>
        <input
          type="text"
          className={`${S.searchInput} ${inputExpanded ? S.expanded : ''}`}
          placeholder="O que você procura?"
          onClick={expandInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={S.searchSubmt}>
          <img src={Lupa} alt="Imagem de uma lupa, indicando o campo de busca do site" className={S.wLupa} />
        </button>
      </form>
    </nav>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <section id={S.styleBrowser}>
        <div onClick={toggleMenu}>
          <img className={S.widthImg} id={S.invisible} src={MenuOn} alt="Menu hamburguer" />
        </div>
        <div className={S.divLogo}>
          <img src={Logo} alt="Logo do site Livros vai na web, onde apresenta um livro aberto com as folhas com a impressão de estarem sendo foleadas" className={S.wLogo} />
          <h1>Livros Vai Na Web</h1>
        </div>
        <Navigation 
          menuOpen={menuOpen} 
          closeMenu={closeMenu} 
          setSearchQuery={setSearchQuery} 
          searchQuery={searchQuery}
        />
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
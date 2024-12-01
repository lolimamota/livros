import React from 'react'
import '../../scss/global.scss'


//IMPORT STYLE
import S from './../../scss/styleComponents/routes/donated-book/donatedbook.module.scss';

//IMPORT IMAGES
import LivroDoado from '@assets/routes-img/livrodoado.png'

//IMPORT axios tests
import ShowBook from '../../livros';



function DonatedBooks() {
  return (
    <main className={S.mainDonated}>
      <section className={S.sectionDonated}>
        <img src={LivroDoado} alt="Imagem de capa do livro O protagonista de Susanne Andrade" />
        <h3>O protagonista</h3>
        <h3>Susanne Andrade</h3>
        <h3>Ficção</h3>
      </section>
      <section className={S.sectionDonated}>
        <img src={LivroDoado} alt="Imagem de capa do livro O protagonista de Susanne Andrade" />
        <h3>O protagonista</h3>
        <h3>Susanne Andrade</h3>
        <h3>Ficção</h3>
      </section>
      <section className={S.sectionDonated}>
        <img src={LivroDoado} alt="Imagem de capa do livro O protagonista de Susanne Andrade" />
        <h3>O protagonista</h3>
        <h3>Susanne Andrade</h3>
        <h3>Ficção</h3>
      </section>
      <section className={S.sectionDonated}>
        <img src={LivroDoado} alt="Imagem de capa do livro O protagonista de Susanne Andrade" />
        <h3>O protagonista</h3>
        <h3>Susanne Andrade</h3>
        <h3>Ficção</h3>
      </section>
      <ShowBook />
    </main>
  )
}

export default DonatedBooks
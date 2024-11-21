import React from 'react'
import '../scss/global.scss'


//IMPORT STYLE
import S from '../scss/styleComponents/routes/donated-book/donatedbook.module.scss';

//IMPORT IMAGES
import LivroDoado from '../assets/routes-img/livrodoado.png'

function DonatedBooks() {
  return (
    <main>
      <section>
        <img src={LivroDoado} alt="Imagem de capa do livro O protagonista de Susanne Andrade" />
        <h3>O protagonista</h3>
        <h3>Susanne Andrade</h3>
        <h3>Ficção</h3>
      </section>
    </main>
  )
}

export default DonatedBooks
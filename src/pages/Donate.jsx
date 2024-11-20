import React from 'react'
import '../scss/global.scss';

//IMPORT STYLE
import S from '../scss/styleComponents/routes/donate/donate.module.scss';

import Book from '../assets/routes-img/livro.png'


function Donate() {
  return (
    <main className={S.mainDonate}>
      <section>
      <h2>
      Por favor, preencha o formulário com suas informações e as informações do Livro
      </h2>
      </section>
      <section className={S.cardForm}>
        <div className={S.divForm}>
          <img src={Book} alt="Imagem simples de um livro aberto" />
          <h3>Informações do Livro</h3>
        </div>
        <form className={S.formInputs}>
          <input type="text" id="title" placeholder="Título" />
          <input type="text" id="category" placeholder="Categoria" />
          <input type="text" id="Author" placeholder="Autor" />
          <input type="text" id="imgLink" placeholder="Link da imagem" />
          <button type='submit'>Doar</button>
        </form>
      </section>
    </main>
  )
}

export default Donate
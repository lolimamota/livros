import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import '../../scss/global.scss';
import 'react-toastify/dist/ReactToastify.css';

//IMPORT STYLE
import S from '../../scss/styleComponents/routes/donate/donate.module.scss';

//IMPORT IMAGES
import Book from '@assets/routes-img/livro.png'



function Donate() {
  const notifySuccess = () => {
    toast.success("Parabéns! Você doou um livro!",
      {
        position: 'top-center',
        theme: 'colored',
        transition: Zoom,
        autoClose: 3000,
      }
    );
  };

  const notifyError = () => {
    toast.error("Estou vendo que alguém tem problemas para preencher formulários!",
      {
        position: 'top-center',
        theme: 'colored',
        transition: Zoom,
        autoClose: 3000,
      }
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.title.value.trim();
    const category = event.target.category.value.trim();
    const author = event.target.author.value.trim();
    const imgLink = event.target.imgLink.value.trim();

    if (!title || !category || !author || !imgLink) {
      notifyError();
    } else {
      notifySuccess();
    }
  };

  return (
    <main className={S.mainDonate}>
      <section>
        <h2>
          Por favor, preencha o formulário com as informações do Livro
        </h2>
      </section>
      <section className={S.cardForm}>
        <div className={S.divForm}>
          <img src={Book} alt="Imagem simples de um livro aberto" />
          <h3>Informações do Livro</h3>
        </div>
        <form className={S.formInputs} onSubmit={handleSubmit}>
          <input className={S.shadowInput} type="text" id="title" name="title" placeholder="Título" />
          <input className={S.shadowInput} type="text" id="category" name="category" placeholder="Categoria" />
          <input className={S.shadowInput} type="text" id="author" name="author" placeholder="Autor" />
          <input className={S.shadowInput} type="text" id="imgLink" name="imgLink" placeholder="Link da imagem" />
          <button type='submit' className={S.donateBtn}>Doar</button>
          <ToastContainer limit={1} />
        </form>
      </section>
    </main>
  )
}

export default Donate
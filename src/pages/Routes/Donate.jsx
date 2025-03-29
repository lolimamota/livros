import {React, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import '../../scss/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

//IMPORT STYLE
import S from '../../scss/styleComponents/routes/donate/donate.module.scss';

//IMPORT IMAGES
import Book from '@assets/routes-img/livro.png'
import { use } from 'react';



function Donate() {
  // estados dos dados
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image_url, setUrl] = useState("");

  // estruturar o envio dos dados
  const sendData = async()=>{
    const urlAPI = "api-livros-wtvn.onrender.com/donated"

    const dataTo = {
      title,
      author,
      category,
      image_url
    }
    
    try {
      const sendAPI = await axios.post(urlAPI, dataTo);
      console.log("Dados enviados com sucesso:", sendAPI.data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  
    
  }



  // cap == capturar dados

  const capTitle = (e) => {
    setTitle(e.target.value)
  };

  const capAuthor = (e) => {
    setAuthor(e.target.value)
  };

  const capCategory = (e) => {
    setCategory(e.target.value)
  }

  const capUrl = (e) => {
    setUrl(e.target.value)
  }





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
    
    setTitle("");
    setAuthor("");
    setCategory("");
    setUrl("")
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
          <input className={S.shadowInput} type="text" id="title" name="title" placeholder="Título" onChange={capTitle} value={title}/>
          <input className={S.shadowInput} type="text" id="category" name="category" placeholder="Categoria" onChange={capCategory} value={category}/>
          <input className={S.shadowInput} type="text" id="author" name="author" placeholder="Autor" onChange={capAuthor} value={author}/>
          <input className={S.shadowInput} type="text" id="imgLink" name="imgLink" placeholder="Link da imagem" onChange={capUrl} value={image_url}/>
          <button type='submit' className={S.donateBtn} onClick={sendData}>Doar</button>
          <ToastContainer limit={1} />
        </form>
      </section>
    </main>
  )
}

export default Donate
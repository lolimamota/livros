import axios from "axios";
import { useEffect, useState } from "react";
import "../src/scss/global.scss";

// IMPORTS DE ESTILO E DE IMAGEM
import S from './scss/styleComponents/routes/donated-book/donatedbook.module.scss';
import Delete from './assets/routes-img/delete.png';
import Edit from './assets/routes-img/edit.png'

export default function ShowBook() {
    const [book, setBook] = useState([]);

    const getLivros = async () => {
        const urlAPI = "https://api-livros-wtvn.onrender.com/donatedBooks";

        try {
            const response = await axios.get(urlAPI);
            setBook(response.data);
        }
        catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    };

    const deleteLivro = async (id) => {
        const urlAPI = `https://api-livros-wtvn.onrender.com/donatedBooks/${id}`;

        try {
            await axios.delete(urlAPI); // Envia a requisição DELETE para a API
            setBook(book.filter((item) => item.id !== id)); // Atualiza o estado para remover o livro excluído
            console.log(`${id} - Este livro nos deu adeus!`);
        } catch (error) {
            console.error("Temos certeza que este livro ainda está aqui!", error);
        }
    };


    useEffect(() => {
        getLivros();
    },
        []);

    return (
        <section className={S.sectionDonated}>
            <h2>Livros doados</h2>
            <div className={S.divDonated}>
                {book.map((book) => (
                    <article key={book.id} className={S.articleDonated}>
                        <img src={book.image_url} alt={book.title} />
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <h5>{book.category}</h5>
                        <div className={S.divBtnDonated}>
                            <button className={S.btnDonated}>
                                <img src={Edit} alt="Imagem de um lápis onde se pode clicar para editar o livro" />
                                Editar
                            </button>
                            <button className={S.btnDonated} onClick={() => deleteLivro(book.id)} >
                                <img src={Delete}
                                alt="Imagem de uma lixeira onde se pode clicar para deletar o livro" /> Excluir
                            </button>
                        </div>
                    </article>
                ))
                }
            </div>
        </section>
    )
}
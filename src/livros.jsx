import axios from "axios";
import { useEffect, useState } from "react";
import "../src/scss/global.scss";

// IMPORTS DE ESTILO E DE IMAGEM
import S from './scss/styleComponents/routes/donated-book/donatedbook.module.scss';
import Delete from './assets/routes-img/delete.png';
import Edit from './assets/routes-img/edit.png'

export default function ShowBook() {
    const [book, setBook] = useState([]);

    const [editForm, setEditForm] = useState(false)
    const [livroAtual, setLivroAtual] = useState({})

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
        const urlAPI = `https://api-livros-wtvn.onrender.com/delete/${id}`;

        try {
            await axios.delete(urlAPI); // Envia a requisição DELETE para a API
            setBook(book.filter((item) => item.id !== id)); // Atualiza o estado para remover o livro excluído
            console.log(`${id} - Este livro nos deu adeus!`);
        } catch (error) {
            console.error("Temos certeza que este livro ainda está aqui!", error);
        }
    };

    const updateLivro = async (id) => {
        const urlAPI = `https://api-livros-wtvn.onrender.com/update/${id}`;
        try {
            await axios.put(urlAPI, livroAtual);
            setBook(
                book.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item, // Mantém todas as propriedades do livro original
                            ...livroAtual // Sobrescreve com os dados atualizados
                        };
                    } else {
                        return item; // Retorna os itens não modificados sem alteração
                    }
                })
            );
            setEditForm(false);
        } catch (error) {
            console.error(`É apenas mais do mesmo, o ${id} não foi atualizado!`, error);
        }
    };

    const mostrarForm = (book) => {
        setLivroAtual(book);
        setEditForm(true);
    }


    useEffect(() => {
        getLivros();
    },
        []);

    return (
        <section className={S.sectionDonated}>
            <div className={S.divH2}>
                <h2>Livros doados</h2>
            </div>
            <div className={S.divDonated}>
                {book.map((book) => (
                    <article key={book.id} className={S.articleDonated}>
                        <img src={book.image_url} alt={book.title} />
                        <h3>{book.title}</h3>
                        <h4>{book.author}</h4>
                        <h5>{book.category}</h5>
                        <div className={S.divBtnDonated}>
                            <button className={S.btnDonated} onClick={() => mostrarForm(book)} >
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
            return (
            <section className={S.sectionDonated}>
                <div className={S.divH2}>
                    <h2>Livros doados</h2>
                </div>
                <div className={S.divDonated}>
                    {book.map((book) => (
                        <article key={book.id} className={S.articleDonated}>
                            <img src={book.image_url} alt={book.title} />
                            <h3>{book.title}</h3>
                            <h4>{book.author}</h4>
                            <h5>{book.category}</h5>
                            <div className={S.divBtnDonated}>
                                <button
                                    className={S.btnDonated}
                                    onClick={() => mostrarForm(book)} // Chamando função ao clicar
                                >
                                    <img src={Edit} alt="Imagem de um lápis onde se pode clicar para editar o livro" />
                                    Editar
                                </button>
                                <button
                                    className={S.btnDonated}
                                    onClick={() => deleteLivro(book.id)}
                                >
                                    <img src={Delete} alt="Imagem de uma lixeira onde se pode clicar para deletar o livro" />
                                    Excluir
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
                {editForm && (
                    <div className={S.editForm}>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                updateLivro(livroAtual.id); // Chamando a função com os dados atualizados
                            }}
                        >
                            <label>
                                Título:
                                <input
                                    type="text"
                                    value={livroAtual.title || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, title: e.target.value })
                                    }
                                />
                            </label>
                            <label>
                                Autor:
                                <input
                                    type="text"
                                    value={livroAtual.author || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, author: e.target.value })
                                    }
                                />
                            </label>
                            <label>
                                Categoria:
                                <input
                                    type="text"
                                    value={livroAtual.category || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, category: e.target.value })
                                    }
                                />
                            </label>
                            <button type="submit">Salvar alterações</button>
                            <button type="button" onClick={() => setEditForm(false)}>
                                Cancelar
                            </button>
                        </form>
                    </div>
                )}
            </section>
            );
        </section>
    )
}
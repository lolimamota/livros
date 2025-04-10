import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../src/scss/global.scss";

//import do react-toastify
import { ToastContainer, toast } from 'react-toastify';
import { Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORTS DE ESTILO E DE IMAGEM
import S from './scss/styleComponents/routes/donated-book/donatedbook.module.scss';
import Delete from './assets/routes-img/delete.png';
import Edit from './assets/routes-img/edit.png';
import loadingGif from './assets/routes-img/loading.gif';

export default function ShowBook() {
    // Estados
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [editForm, setEditForm] = useState(false);
    const [livroAtual, setLivroAtual] = useState({});
    const [loading, setLoading] = useState(false);
    
    // Usar location para obter parâmetros da URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';

    // Funções para o toastify
    // Para o botão deletar:
    const notifySuccessDel = (bookId, title) => {
        toast.success(`${bookId} - "${title}" foi removido com sucesso!`, {
            position: 'top-center',
            theme: 'colored',
            transition: Zoom,
            autoClose: 3000,
        });
    };

    const notifyErrorDel = (bookId, title) => {
        toast.error(`${bookId} - Não foi possível remover "${title}"!`, {
            position: 'top-center',
            theme: 'colored',
            transition: Zoom,
            autoClose: 3000,
        });
    };

    // Para o botão salvar alterações
    const notifySucessUpd = (bookId, title) => {
        toast.success(`${bookId} - "${title}" foi atualizado com sucesso!`, {
            position: 'top-center',
            theme: 'colored',
            transition: Zoom,
            autoClose: 3000,
        });
    };

    const notifyErrorUpd = (bookId, title) => {
        toast.error(`Não foi possível atualizar "${title}" (ID: ${bookId})!`, {
            position: 'top-center',
            theme: 'colored',
            transition: Zoom,
            autoClose: 3000,
        });
    };

    // Funções da API
    const getLivros = async () => {
        const urlAPI = "https://api-livros-wtvn.onrender.com/donatedBooks";
        setLoading(true);

        try {
            const response = await axios.get(urlAPI);
            setBooks(response.data);
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
            toast.error("Não foi possível carregar os livros. Tente novamente mais tarde.", {
                position: 'top-center',
                theme: 'colored',
                transition: Zoom,
                autoClose: 3000,
            });
        } finally {
            setLoading(false);
        }
    };

    const deleteLivro = async (book) => {
        const { id, title } = book;
        const urlAPI = `https://api-livros-wtvn.onrender.com/delete/${id}`;
        setLoading(true);

        try {
            await axios.delete(urlAPI);
            const updatedBooks = books.filter((item) => item.id !== id);
            setBooks(updatedBooks);
            filterBooks(updatedBooks, searchQuery);
            console.log(`${id} - "${title}" foi removido com sucesso!`);
            notifySuccessDel(id, title);
        } catch (error) {
            console.error(`Erro ao deletar livro ${id}:`, error);
            notifyErrorDel(id, title);
        } finally {
            setLoading(false);
        }
    };

    const updateLivro = async (id) => {
        const urlAPI = `https://api-livros-wtvn.onrender.com/update/${id}`;
        setLoading(true);

        try {
            await axios.put(urlAPI, livroAtual);
            const updatedBooks = books.map((item) => 
                item.id === id ? { ...item, ...livroAtual } : item
            );
            setBooks(updatedBooks);
            filterBooks(updatedBooks, searchQuery);
            setEditForm(false);
            notifySucessUpd(id, livroAtual.title);
        } catch (error) {
            console.error(`Erro ao atualizar livro ${id}:`, error);
            notifyErrorUpd(id, livroAtual.title);
        } finally {
            setLoading(false);
        }
    };

    const mostrarForm = (book) => {
        setLivroAtual(book);
        setEditForm(true);
    };

    // Função para filtrar livros com base na busca
    const filterBooks = (booksArray, query) => {
        if (!query) {
            setFilteredBooks(booksArray);
            return;
        }
        
        const filtered = booksArray.filter(book => 
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.category.toLowerCase().includes(query.toLowerCase())
        );
        
        setFilteredBooks(filtered);
        
        if (filtered.length === 0 && booksArray.length > 0) {
            toast.info(`Nenhum livro encontrado para "${query}"`, {
                position: 'top-center',
                theme: 'colored',
                transition: Zoom,
                autoClose: 3000,
            });
        }
    };

    useEffect(() => {
        getLivros();
    }, []);

    // Filtrar livros quando books ou searchQuery mudam
    useEffect(() => {
        filterBooks(books, searchQuery);
    }, [books, searchQuery]);

    const displayBooks = filteredBooks.length > 0 || searchQuery ? filteredBooks : books;

    return (
        <>
            <ToastContainer limit={3} />
            <section className={S.sectionDonated}>
                <div className={S.divH2}>
                    <h2 className={S.h2Donated}>
                        {searchQuery ? `Resultados para "${searchQuery}"` : "Livros doados"}
                    </h2>
                </div>
                
                {loading && (
                    <div className={S.loading}>
                        <img src={loadingGif} alt="Carregando..." />
                    </div>
                )}
                
                <div className={S.divDonated}>
                    {displayBooks.length === 0 && !loading ? (
                        <p className={S.emptyMessage}>Nenhum livro encontrado.</p>
                    ) : (
                        displayBooks.map((book) => (
                            <article key={book.id} className={S.articleDonated}>
                                <img 
                                    src={book.image_url} 
                                    alt={`Capa do livro: ${book.title}`} 
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/150x200?text=Sem+Imagem";
                                    }}
                                />
                                <h3>{book.title}</h3>
                                <h4>{book.author}</h4>
                                <h5>{book.category}</h5>
                                <div className={S.divBtnDonated}>
                                    <button 
                                        className={S.btnDonated} 
                                        onClick={() => mostrarForm(book)}
                                        disabled={loading}
                                    >
                                        <img src={Edit} alt="Editar livro" />
                                        Editar
                                    </button>
                                    <button 
                                        className={S.btnDonated} 
                                        onClick={() => deleteLivro(book)}
                                        disabled={loading}
                                    >
                                        <img src={Delete} alt="Excluir livro" /> 
                                        Excluir
                                    </button>
                                </div>
                            </article>
                        ))
                    )}
                </div>
                
                {editForm && (
                    <div className={S.editForm}>
                        <form 
                            className={S.formStyle}
                            onSubmit={(e) => {
                                e.preventDefault();
                                updateLivro(livroAtual.id);
                            }}
                        >
                            <label>
                                <h3>Título:</h3>
                                <input
                                    type="text"
                                    value={livroAtual.title || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, title: e.target.value })
                                    }
                                    required
                                />
                            </label>
                            
                            <label>
                                <h3>Autor:</h3>
                                <input
                                    type="text"
                                    value={livroAtual.author || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, author: e.target.value })
                                    }
                                    required
                                />
                            </label>
                            
                            <label>
                                <h3>Categoria:</h3>
                                <input
                                    type="text"
                                    value={livroAtual.category || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, category: e.target.value })
                                    }
                                    required
                                />
                            </label>
                            
                            <label>
                                <h3>URL da imagem:</h3>
                                <input
                                    type="text"
                                    value={livroAtual.image_url || ""}
                                    onChange={(e) =>
                                        setLivroAtual({ ...livroAtual, image_url: e.target.value })
                                    }
                                    required
                                />
                            </label>
                            
                            <div className={S.divBtnDonated}>
                                <button 
                                    className={S.btnDonated} 
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Salvando..." : "Salvar alterações"}
                                </button>
                                <button 
                                    className={S.btnDonated} 
                                    type="button" 
                                    onClick={() => setEditForm(false)}
                                    disabled={loading}
                                >
                                    Cancelar alterações
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </section>
        </>
    );
}
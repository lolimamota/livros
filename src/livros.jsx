import axios from "axios";
import { useEffect, useState } from "react";
import "../src/scss/global.scss";

import S from './scss/styleComponents/routes/donated-book/donatedbook.module.scss';

export default function ShowBook() {
    const [book, setBook] = useState([]);
    const getLivros = async () => {
        try {
            const response = await axios.get("https://openlibrary.org/subjects/romance.json?limit=5");

            console.log(response.data);
            setBook(response.data.works);
        }
        catch (error) {
            console.error("Erro ao buscar os dados:", error);
        }
    };

    useEffect(() => {
        getLivros();
    },
        []);

    return (
        <section className={S.sectionDonated}>
            {book.map((book) => (
                <a href={`https://openlibrary.org${book.key}`} key={book.key} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} />
                        <h4>{book.title}</h4>
                        {book.authors
                            && book.authors.length > 0
                            && (
                                <h5>
                                    {book.authors.map(author => author.name).join(", ")}
                                </h5>
                            )}
                    </div>
                </a>
            ))}
        </section>
    )
}
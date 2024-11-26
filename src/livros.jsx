import axios from "axios";
import { useEffect, useState } from "react";

export default async function funcLivros() {
    const getLivros = async () => {
        const [book, setBook] = useState([]);

        const Livros = await axios.get("https://fakestoreapi.com/products");
        setBook(Livros.data);

        useEffect(() => {
            getLivros();
        }, []);
    };

    return (
        <section>
            {book.map((book) => (
                <div key={book.id}>
                    <img src={book.image} alt="" />
                    <h3>{book.title}</h3>
                </div>
            ))}
        </section>
    )
}
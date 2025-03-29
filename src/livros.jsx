import axios from "axios";
import { useEffect, useState } from "react";
import "../src/scss/global.scss";

import S from './scss/styleComponents/routes/donated-book/donatedbook.module.scss';

export default function ShowBook() {
    const [book, setBook] = useState([]);

    const getLivros = async () => {
        const urlAPI = "https://api-livros-wtvn.onrender.com/donate";

        try {
            const response = await axios.get(urlAPI);
            setBook(response.data);
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
            
        </section>
    )
}
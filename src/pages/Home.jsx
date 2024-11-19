import React from 'react';
import '../scss/global.scss';

import S from '../scss/styleComponents/routes/home/home.module.scss';

function Home() {
  const vantagens =[
    {
      cardImg: Ciranda,
      cardText: "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social."
    },
    {
      cardImg: Leitor,
      cardText: "Estimula o hábito da leitura e o aprendizado contínuo."
    },
    {
      cardImg: Uniao,
      cardText: "Estimula o hábito da leitura e o aprendizado contínuo."
    },
    {
      cardImg: Balanca,
      cardText: "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado."
    }
  ]
  return (
    <main>
      <section className={S.sectionBg}>
        <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>
      <section className={S.sectionCard}>
      </section>
    </main>
  )
}

export default Home
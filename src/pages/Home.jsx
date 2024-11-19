import React from 'react';
import '../scss/global.scss';

import S from '../scss/styleComponents/routes/home/home.module.scss';

function Home() {
  return (
    <main>
      <section className={S.sectionBg}>
        <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>
      <section className={S.sectionCard}>
        <h2>só pra eu ver ali</h2>
      </section>
    </main>
  )
}

export default Home
import React from 'react';
import '../scss/global.scss';

import S from '../scss/styleComponents/routes/home/home.module.scss';
//IMPORT IMAGES
import Ciranda from '../assets/routes-img/circulo-pessoa.png';
import Leitor from '../assets/routes-img/lendo.png';
import Uniao from '../assets/routes-img/mao-pessoa.png';
import Balanca from '../assets/routes-img/balanca.png';


function Home() {
  const vantagens =[
    {
      cardImg: Ciranda,
      cardText: "Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.",
      cardAlt: "É um circulo com quatro bonecos semelhantes a um humano em cada um dos pontos (esquerda, direita, em cima, embaixo)."
    },
    {
      cardImg: Leitor,
      cardText: "Estimula o hábito da leitura e o aprendizado contínuo.",
      cardAlt: "Imagem de um boneco semelhante a um humano segurando um livro, dando a impressão de que o lê."
    },
    {
      cardImg: Uniao,
      cardText: "Estimula o hábito da leitura e o aprendizado contínuo.",
      cardAlt:"Uma mão fechada dentro de um circulo, com varios bonecos semelhante a humanos de pé, com linhas que ligam a cabeça deles no circulo da mão, dando a sensação de união do coletivo."
    },
    {
      cardImg: Balanca,
      cardText: "Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.",
      cardAlt: "imagem de uma balança com pratos ovais, sem pender para nenhum dos lados."
    }
  ]
  return (
    <main>
      <section className={S.sectionBg}>
        <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
      </section>
      <section className={S.sectionCard}>
        {
          vantagens.map((item, index)=>{
            return(
              <div key={index} className={S.cardMap}> 
                <img src={item.cardImg} alt={item.cardAlt} />
                <h3>{item.cardText}</h3>
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Home
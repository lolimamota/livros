import React from 'react'
import '../../scss/global.scss'


//IMPORT STYLE
import S from './../../scss/styleComponents/routes/donated-book/donatedbook.module.scss';

//IMPORT IMAGES
// import LivroDoado from '@assets/routes-img/livrodoado.png'

//IMPORT axios tests
import Show from '../../livros.jsx';



function DonatedBooks() {
  return (
    <main className={S.mainDonated}>
      <section className={S.sectionDonated}>
        <Show />
      </section>
    </main>
  )
}

export default DonatedBooks
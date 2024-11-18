import React from 'react'

//IMPORT IMAGES
import Face from '../../assets/footer-img/face.png';
import Insta from '../../assets/footer-img/insta.png';
import Tweet from '../../assets/footer-img/twitter.png';
import You from '../../assets/footer-img/yt.png';
import Lkd from '../../assets/footer-img/linked.png';

//IMPORT STYLES
import S from '../../scss/styleComponents/footer/footer.module.scss';

function Footer() {
    return (
        <footer className={S.footer}>
            <section>
                <p>4002-8922</p>
                <picture>
                    <ul>
                        <li>
                            <a href="">
                                <img src={Face} alt='Logo do facebook' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Tweet} alt='Logo do twitter' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={You} alt='Logo do youtube' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Lkd} alt='Logo do linkedin' />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src={Insta} alt='Logo do instagram' />
                            </a>
                        </li>
                    </ul>
                </picture>
            </section>
            <section>parte de baixo</section>
        </footer>
    )
}

export default Footer
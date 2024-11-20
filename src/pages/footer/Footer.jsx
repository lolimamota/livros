import React from 'react'
import '../../scss/global.scss';

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
            <section className={S.sectionContacts}>
                <p>4002-8922</p>
                <picture>
                    <ul className={S.ulFlex}>
                        <li>
                            <a href="https://www.facebook.com/vainaweb">
                                <img src={Face} alt='Logo do facebook' />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/vainaweb">
                                <img src={Tweet} alt='Logo do twitter' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@VaiNaWeb">
                                <img src={You} alt='Logo do youtube' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/vainaweb/">
                                <img src={Lkd} alt='Logo do linkedin' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/vainaweb/">
                                <img src={Insta} alt='Logo do instagram' />
                            </a>
                        </li>
                    </ul>
                </picture>
            </section>
            <section className={S.copyright}>
                <p>
                Layout desenvolvido pela Vai Na Web para fins educativos - 2024
                </p>
            </section>
        </footer>
    )
}

export default Footer
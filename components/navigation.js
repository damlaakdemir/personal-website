import React from 'react';
import Link from 'next/link';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import avatar from '../assets/avatar.png'

function Header() {
    return (
        <header className="col-lg-3 col-md-4 col-sm-12 col-12 header">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link href="/"><a className="header__menu__item">Ana Sayfa</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/portfolio"><a className="header__menu__item">Portfolio</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog"><a className="header__menu__item">Makaleler</a></Link>
                </li>
            </ul>
            <div className="col-12 d-flex justify-content-center">
                <img className="header__avatar" src={ avatar } alt="Damla Akdemir"/>
            </div>
            <h3 className="col-12 d-flex justify-content-center mt-3">Damla Akdemir</h3>
            <h5 className="col-12 d-flex justify-content-center header__title">Front End Developer</h5>
            <div className="col-12 d-flex justify-content-center mt-5">
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center">
                    <Link href="">
                        <a target="_blank">
                            <FontAwesomeIcon className="header__icon" icon={ faEnvelope } />
                        </a>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center">
                    <Link href="//github.com/damlaakdemir">
                        <a target="_blank">
                            <FontAwesomeIcon className="header__icon" icon={ faGithubSquare } />
                        </a>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 d-flex justify-content-center">
                    <Link href="//www.linkedin.com/in/damla-akdemir-207743145/">
                        <a target="_blank">
                            <FontAwesomeIcon className="header__icon" icon={ faLinkedin } />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
                <div className="header__menu d-none d-md-block">
                    <Link href="/"><a className="header__menu__item">Ana Sayfa</a></Link>
                    <Link href="/portfolio"><a className="header__menu__item">Portfolio</a></Link>
                    <Link href="/blog"><a className="header__menu__item">Makaleler</a></Link>
                </div>
            </div>
            <div className="col-12 mb-3 header__footer d-none d-md-block">
                <span className="header__footer__text">© 2020 <Link href="//damlaakdemir.com"><a>damlaakdemir.com</a></Link></span>
            </div>
        </header>
    )
}
export default Header

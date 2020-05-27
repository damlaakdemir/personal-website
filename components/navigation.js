import React from 'react';
import Link from 'next/link';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header className="col-lg-3 col-md-4 col-sm-12 col-12 header">
            <div className="col-12 d-flex justify-content-center">
                <img className="header__avatar" src="https://lh3.googleusercontent.com/a-/AOh14Gigi9QEyZXDejRCceUwfRwjDi7llIRK7avy7oz42w=s192-c-rg-br100" alt="Damla Akdemir"/>
            </div>
            <h3 className="col-12 d-flex justify-content-center mt-3">Damla Akdemir</h3>
            <h5 className="col-12 d-flex justify-content-center header__title">Front End Developer</h5>
            <div className="col-12 d-flex justify-content-center mt-5">
                <div className="col-lg-2 col-md-2 col-sm-1 col-1 d-flex justify-content-center">
                    <Link href="">
                        <a target="_blank">
                            <FontAwesomeIcon className="header__icon" icon={ faEnvelope } />
                        </a>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1 col-1 d-flex justify-content-center">
                    <Link href="//github.com/damlaakdemir">
                        <a target="_blank">
                            <FontAwesomeIcon className="header__icon" icon={ faGithubSquare } />
                        </a>
                    </Link>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1 col-1 d-flex justify-content-center">
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

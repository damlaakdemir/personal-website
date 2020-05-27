import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

function Blog() {
    return <Layout>
        <div className="main">
            <h3 className="main__title">Blog</h3>
            <Link href="//medium.com/@damlaakdemr/local-storage-ve-session-storage-nedir-nas%C4%B1l-kullan%C4%B1l%C4%B1r-237aa647b412">
                <a target="_blank">
                    <div className="blog__summary mt-5">
                        <h5>Local Storage ve Session Storage Nedir? Nasıl Kullanılır?</h5>
                        <span className="blog__summary-info"><FontAwesomeIcon icon={ faCalendarAlt } /> 17 Kasım 2019</span>
                        <span className="blog__summary-info"><FontAwesomeIcon icon={ faTags } /> Session Storage, Local Storage, Web Storage, Cookies, Javascript</span>
                    </div>
                </a>
            </Link>
            <Link href="//medium.com/@damlaakdemr/angular-ile-routing-i%CC%87%C5%9Flemleri-c9c4a2826b27">
                <a target="_blank">
                    <div className="blog__summary mt-5">
                        <h5>Angular ile Routing İşlemleri</h5>
                        <span className="blog__summary-info"><FontAwesomeIcon icon={ faCalendarAlt } /> 22 Aralık 2019</span>
                        <span className="blog__summary-info"><FontAwesomeIcon icon={ faTags } /> Angular, Routing, Component, Router, Angular Routing</span>
                    </div>
                </a>
            </Link>
        </div>
    </Layout>
}

export default Blog

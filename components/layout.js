import React from 'react';
import Head from 'next/head';

import Navigation from './navigation'

function Layout({ children }) {
    return (
        <div className="row">
            <Head>
                <title>Damla Akdemir | Front End Developer</title>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navigation />
            <main className="col-lg-9 col-md-8 col-sm-12 col-12">{ children }</main>
        </div>
    )
}

export default Layout

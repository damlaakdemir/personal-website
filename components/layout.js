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
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123268889-2"></script>
                <script
                    dangerouslySetInnerHTML= {{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date());

                    gtag('config', 'UA-123268889-2');
                    `,
                    }}
                />
            </Head>
            <Navigation />
            <main className="col-lg-9 col-md-8 col-sm-12 col-12">{ children }</main>
        </div>
    )
}

export default Layout

import React from 'react';
import Link from 'next/link';

import Layout from '../components/layout'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
    return <Layout>
        <div className="main">
            <h3 className="main__title">Portfolio</h3>
            <Link href="//www.testinium.com/">
                <a target="_blank">
                    <img className="mt-4 portfolio__testinium" src="//testinium.com/images/svg/testinium-web.svg" alt="Testinium" />
                </a>
            </Link>
            <div className="portfolio__date mb-2 mt-3"><FontAwesomeIcon icon={ faCalendarAlt } /> 04/2019 - Hâlen</div>
            <div>Eski adıyla Saha Bilgi Teknolojileri, Testinium, Loadium, QA Dashboard, SBox ürünlerini geliştirmektedir. Tek tek bahsetmem gerekirse; </div>
            <div className="pt-3 pl-3">
                <div className="mb-3">
                    <Link href="//testinium.io/"><a className="portfolio__link-testinium" target="_blank">Testinium.io</a></Link>, Temel olarak testlerinizin planlanması, raporlanması ve yönetimini web ve mobil platformlarda sunar. <br />
                    Bu projede Angular, TypeScript, JavaScript, HTML, SCSS, Bootstrap teknolojilerini kullanarak projenin geliştirilmesine ve bugların fixlenmesine katkıda bulunuyorum.
                </div>
                <div className="mb-3">
                    <Link href="//loadium.io/"><a className="portfolio__link-loadium" target="_blank">Loadum.io</a></Link>, Projenizin yük testini yapan ve anında rapor veren bir platformdur. <br />
                    Bu projede Angular, TypeScript,JavaScript, HTML, CSS, teknolojilerini kullanarak projenin geliştirilmesine ve bugların fixlenmesine katkıda bulunuyorum.
                </div>
                <div>
                    <b className="portfolio__link-dashboard">QA Dashboard</b>, Farklı ortamlardan kaliteye ilişkin metrikleri toplamak için özel gösterge panoları oluşturulan ve tüm metrikleri tek bir yerde izlemek için özel araçlar kullanılan bir üründür. <br />
                    Bu projede Angular, TypeScript, JavaScript, HTML, SCSS, Ant Design gibi teknolojilerini kullanarak 1 yılı aşkın süredir projenin geliştirilmesine katkıda bulunuyorum.
                </div>
            </div>
            <Link href="//www.lookus.net/">
                <a target="_blank">
                    <img className="mt-5 portfolio__lookus" src="//www.lookus.net/images/LookUs-Logo-Dark.png" alt="Lookus Scientific" />
                </a>
            </Link>
            <div className="portfolio__date mb-2 mt-3"><FontAwesomeIcon icon={ faCalendarAlt } /> 07/2017 - 12/2018</div>
            <div>Lookus, akademik kurumların, uzmanlık derneklerinin ve kongrelerinin ihtiyacına yönelik yazılım altyapısını hazırlayan ve web site tasarımlarına çözüm üreten bir firmadır. <br />
                Lookus'ta Art Director'den gelen tasarımın Bootstrap ile responsive olacak şekilde HTML formata dönüştürülmesi üzerine çalıştım.
                Feedbackler doğrultusunda gerekli düzenlemelerin yapılması ve süreç boyunca iş takibinin yapılmasında görev aldım. Kullandığım teknolojiler: HTML, CSS, Bootstrap kütüphanesi.
            </div>
            <Link href="//www.aweb.com.tr/tr">
                <a target="_blank">
                    <img className="mt-5 portfolio__aweb" src="//www.aweb.com.tr/upload/image/logo.png" alt="Aweb Yazılım & Danışmanlık"/>
                </a>
            </Link>
            <div className="portfolio__date mb-2 mt-3"><FontAwesomeIcon icon={ faCalendarAlt } /> 07/2016 - 04/2017</div>
            <div>Aweb, yazılım altyapıları kullanarak firmaların ihtiyaçları doğrultusunda yazılım ve tasarım konularında hizmet vermektedir. <br />
                Aweb'de müşteri talebi doğrultusunda demo tasarım hazırlanması ve müşteri feedbackleri ile belirlenen içeriklerin tasarıma işlenmesi üzerine çalıştım.
                Aynı zamanda hosting yönetimi, sosyal medya yönetimi ve seo çalışmalarında bulundum. Burada daha çok HTML, CSS, Responsive Design konusunda çalıştım. </div>
        </div>
    </Layout>
}

export default Portfolio

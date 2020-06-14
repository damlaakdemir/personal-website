import React from 'react';

import Layout from '../components/layout'

function HomePage() {
    return <Layout>
        <div className="main">
            <h3 className="main__title">Hakkımda</h3>
            <p>Merhaba Ben Damla. İstanbul'da yaşıyorum. Testinium firmasında farklı projelerde Front End Developer olarak çalışıyorum.</p>
            <p>Yeni teknolojiler öğrenmeyi, araştırmayı seviyorum. Son 6 ay içinde makale yazmaya başladım. Bunu boş zamanlarımda daha çok sürdürmeyi istiyorum.
                Yazarak, paylaşarak ve uygulayarak daha iyi öğrenip detayları daha iyi kavradığımı düşünüyorum.
            </p>
            <p> Anadolu Üniversitesi İşletme Fakültesini bitirmek üzereyim :) Dumlupınar Üniversitesi Bilgisayar Programcılığı mezunuyum.
                Farklı diller ve teknolojiler üzerine eğitim aldım.
                O zamanlar daha çok kitaplardan olsa da eğitim videoları da izleyerek ve gördüklerimi uygulayarak öğrenmeyi tercih ettim. Hala sektörde eğitim veren
                kişilerin YouTube, Udemy videolarını takip ediyor ve makalelerini okuyorum. Bitirme projesi olarak Android üzerinde okulun paylaştığı duyuruları listeleyen bir uygulama geliştirmiştim.
            </p>
            <p>Mezun olduktan sonra Microsoft Yazılım Uzmanlığı kursuna gidip 6 ay eğitim aldım.
                Bu sürede hem okul bittikten sonra 'eee şimdi ne yapacağım?' stresini attım hem de kendimi iş hayatına hazırlamış oldum.
                Burada C#, .NET, SQL, Javascript, HTML ve CSS eğitimleri aldım.
                Front End tarafına her zaman daha çok ilgim vardı fakat tam kararımı kurs bitiminde vermiş oldum.
            </p>
            <p>Tam zamanlı olarak çalıştığım bir dönemde freelance işler alarak bu dünyayı da keşfetmiş oldum. Ve kısa bir dönem tam zamanlı olarak remote çalışma fırsatım oldu.</p>
            <p>Kullandığım teknolojilerden bahsetmem gerekirse; JavaScript, TypeScript, HTML5, Bootstrap, CSS, SCSS, Angular ve React. <br />
                Version Control System olarak GitLab ve GitHub kullanıyorum. <br />
                Temel olarak Adobe Photoshop, Adobe Illustrator ve Adobe XD kullanıyorum. <br />
                Mevcut çalıştığım şirkette Jira ürününü kullaranak proje yönetimini gerçekleştirmekteyiz. <br />
                Agile & Scrum metodolojisine göre proje geliştirmelerini yürütüyoruz.
            </p>
            <p><i>* Bu web sayfasını React.js frameworku olan Next.js ile geliştirdim.</i></p>
        </div>

    </Layout>
}

export default HomePage

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import ParagraphText from '../components/typography/ParagraphText';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { AboutUsStyles } from '../styles/AboutUsStyles';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';

function AboutUs() {
  const images = {
    images: {
      sources: [],
      fallback: {
        src: 'https://cdn.sanity.io/images/o7gijkpe/production/bea4e5a3b804b5ccc80ab1d63a6626fac373308a-750x500.jpg?w=750&h=500&auto=format',
        srcSet:
          'https://cdn.sanity.io/images/o7gijkpe/production/bea4e5a3b804b5ccc80ab1d63a6626fac373308a-750x500.jpg?rect=0,1,750,499&w=320&h=213&auto=format 320w,\nhttps://cdn.sanity.io/images/o7gijkpe/production/bea4e5a3b804b5ccc80ab1d63a6626fac373308a-750x500.jpg?w=654&h=436&auto=format 654w,\nhttps://cdn.sanity.io/images/o7gijkpe/production/bea4e5a3b804b5ccc80ab1d63a6626fac373308a-750x500.jpg?w=750&h=500&auto=format 750w',
        sizes: '(min-width: 750px) 750px, 100vw'
      }
    },
    layout: 'constrained',
    backgroundColor: '#b8b8b8',
    width: 750,
    height: 500
  };
  return (
    <PageSpace top={80} bottom={100}>
      <AboutUsStyles>
        <div className='container'>
          <SEO title='About Us' />
          <PageHeader title='Tentang Kami' className='pageHeader'>
            <ParagraphText>
              Front Perjuangan Pemuda Indonesia disingkat FPPI merupakan
              organisasi pergerakan pemuda yang lahir sebagai respon terhadap
              kuatnya hegemoni, korporatisme negara, ketidakadilan global, dan
              menampik penetrasi yang memandulkan daya kritis dan radikalisme
              kaum muda.
            </ParagraphText>
            <GatsbyImage
              image={images}
              alt='tentang-kami'
              className='coverImage'
            />
          </PageHeader>
          <div className='aboutus__container'>
            <div className='quote'>
              Benarkah pilihan-pilihan sejarah manusia harus dibatasi dengan
              garis yang memisahkan atau menghubungkan sosialisme dan
              kapitalisme, kalau demikian halnya, alangkah sempitnya dunia,
              alangkah miskinnya manusia”. <br />
              (BAB II Manifesto Politik Front Perjuangan Pemuda Indonesia)
            </div>
            <h1>Sejarah FPPI</h1>
            <div className='item__detail'>
              Pasca Mei 1998 yang ditandai dengan pengunduran diri Soeharto,
              kepemimpinan nasional tak mampu lagi menertibkan situasi politik,
              sosial, ekonomi dan menyelenggarakan pengadilan terhadap
              kejahatan-kejahatan Orde Baru. Kasus-kasus ketidakadilan kepada
              rakyat atas nama pembangunan belum terselesaikan dengan tuntas.
              <div className='space' />
              Disisi lain, gambaran oposisi ekstra parlemen baik pressure group
              maupun gerakan mahasiswa retak akibat perbedaan cara pandang
              tentang kepemimpinan nasional, yang juga mengakibatkan situasi
              sosial politik ditingkatan masyarakat bertambah runyam. Tak ada
              lagi gerakan sosial yang merespon permasalahan ditingkatan
              masyarakat seperti upah buruh, harga pupuk, land reform, harga
              beras, keselamatan nelayan dan lain-lain.
              <div className='space' />
              Menjelang pemilu 1999, kondisi yang ada bertambah berat. Suasana
              negara memanas. Ditambah dengan banyaknya partai politik yang
              terlibat dalam kontestasi politik yang tidak melakukan
              pemberdayaan terhadap massanya sehingga kesadaran rakyat tidak
              pernah tumbuh.
              <div className='space' />
              Partai politik dalam reformasi kebebasan konyol hanya memberikan
              pendidikan yang berujung kepada pertumpahan darah. Melihat konflik
              horizontal yang menguat dan ketidakseriusan para elit
              penyelenggara roda pemerintahan ini, memunculkan pertanyaan
              mendasar bagi pergerakan, siapa yang akan menjadi pelindung
              rakyat?
              <div className='space' />
              Reformasi adalah pelajaran dan perubahan adalah kerja. Respon
              politik terhadap jatuhnya Soeharto belum menjadi ruang-ruang
              pembebasan bagi elemen-elemen rakyat. Dengan demikian, harus ada
              usaha radikal dari kalangan pergerakan. Yang dibutuhkan sekarang
              ini adalah proses gerakan revolusioner untuk mengakhiri omong
              kosong penguasa dan basa-basi kelompok elit reaksioner. Demi
              inilah <b>Front Perjuangan Pemuda Indonesia</b> lahir.
            </div>
            <h1>SIKAP POLITIK </h1>
            <div className='item__detail'>
              Tribalisme akibat tiadanya kebanggaan dan penghargaan pusat kepada
              daerah, sentimen anti jawa akibat kesalahan Soeharto plus
              kepentingan kapitalisme global, mengakibatkan semangat
              disintegrasi terus berkobar, terutama pada saat momentum evaluasi
              kinerja penguasa yang seringkali berujung kepada pergantian
              kepemimpinan nasional.
              <div className='space' />
              Semangat disintegrasi saat ini berhasil dihembuskan berkat
              provokasi dan kepentingan kapitalisme internasional dengan alatnya
              yaitu Trans National Corporations (TNCs) dan Multi National
              Corporations (MNCs), maka bangkit dan melawan terhadapnya adalah
              satu pilihan dan kewajiban, karena kita tidak ingin wilayah Negara
              Kesatuan Republik Indonesia (NKRI) terus menerus dieksploitasi dan
              dijajah.
              <div className='space' />
              Kehadiran FPPI adalah untuk mengawal Republik dari pertama,
              penetrasi dunia pertama kepada dunia ketiga yang memanfaatkan
              momentum proses sosial penuh kekerasan, kedua disintegrasi bangsa
              yang memudahkan para pemilik modal untuk melakukan pemilikan
              kekuasaan atas modal adan alat produksi, dan ketiga menyelamatkan
              republik dari bahaya demokrasi terpimpin.
            </div>
            <h1>Kerja-Kerja Pergerakan</h1>
            <div className='item__detail'>
              Situasi obyektif negara yang masih diliputi oleh ketidakadilan
              kepada rakyat sebagai pemegang kuasa atas negara tentunya harus
              disikapi dengan sebuah langkah yang teratur sekaligus
              revolusioner. Kepemilikan atas modal dan alat produksi oleh rakyat
              merupakan keniscayaan yang harus segera diwujudkan.
              <div className='space' />
              Kerja-kerja Nasional, Demokrasi dan Kerakyatan merupakan langkah
              –langkah yang selama ini dilakukan oleh FPPI sejak tahun 1996
              ketika masih menjadi embrio, FPPI telah melakukan berbagai
              intensifikasi kerja advokasi kepada rakyat. Pembelaan Kasus Tanah
              Probolinggo, Kasus Pasar Wonosobo, Buruh Jombang dan Surabaya,
              Kasus Tanah Surabaya, Blitar, Kediri, Garut, Medan, Kendal,
              Batang, dan Pekalongan merupakan sebagian dari realisasi dari
              cita-cita besar pergerakan Front Perjuangan Pemuda Indonesia.
              <div className='space' />
              Selain hal tersebut, penyikapan terhadap situasi politik yang
              masih mencerminkan kekuasaan yang tidak berujung pangkal dan tidak
              mempunyai keberpihakan terhadap rakyat juga menjadi program
              politik dari Front Perjuangan Pemuda Indonesia. Dengan berdasar
              pada dua aras tersebut, maka wajib adanya ;{' '}
              <b>
                Mendidik Rakyat Dengan Pergerakan dan Mendidik Penguasa Dengan
                Perlawanan
              </b>
            </div>
            <h1>Sembako Perjuangan</h1>
            <div className='item__detail'>
              Bila pergerakan dijalankan sedemikian rupa, maka kita memandang
              ada sembilan bahan pokok perjuangan yang harus terus disuarakan
              dalam skala prioritas yang sama.
              <div className='space' />
              <ol>
                <li>1. Lapangan Kerja untuk Rakyat</li>
                <div className='space' />
                <li>2. Pendidikan Murah untuk Rakyat</li>
                <div className='space' />
                <li>3. Tanah untuk Rakyat atau Reformasi Agraria</li>
                <div className='space' />
                <li>
                  4. Peradilan Kejahatan Politik-Ekonomi Jenderal Soeharto
                </li>
                <div className='space' />
                <li>5. Nasionalisasi Harta-benda Pejabat Korup Orba</li>
                <div className='space' />
                <li>6. Penghapusan Utang Luar Negeri</li>
                <div className='space' />
                <li>7. Kembalikan Aset Negara yang Tergadai</li>
                <div className='space' />
                <li>
                  8. Naikan Upah Buruh untuk Meningkatkan Kesejahteraannya
                </li>
                <div className='space' />
                <li>9. Bubarkan Lembaga Teritorial dan Ekstrayudisial TNI</li>
              </ol>
            </div>
            <div className='last-quote'>Lahir untuk Respublica</div>
          </div>
          <FeaturedBlogs />
        </div>
      </AboutUsStyles>
    </PageSpace>
  );
}

export default AboutUs;

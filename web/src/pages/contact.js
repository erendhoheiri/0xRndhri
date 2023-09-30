import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
import ParagraphText from '../components/typography/ParagraphText';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import { ContactStyles } from '../styles/ContactStyles';

function Contact() {
  const images = {
    images: {
      sources: [],
      fallback: {
        src: 'https://cdn.sanity.io/images/o7gijkpe/production/65c62eca9b8259f80df286a412fd4fa8314ce1f2-640x320.png?w=640&h=320&auto=format',
        srcSet:
          'https://cdn.sanity.io/images/o7gijkpe/production/65c62eca9b8259f80df286a412fd4fa8314ce1f2-640x320.png?w=320&h=160&auto=format 320w,\nhttps://cdn.sanity.io/images/o7gijkpe/production/65c62eca9b8259f80df286a412fd4fa8314ce1f2-640x320.png?w=640&h=320&auto=format 640w',
        sizes: '(min-width: 640px) 640px, 100vw'
      }
    },
    layout: 'constrained',
    backgroundColor: '#808080',
    width: 640,
    height: 320
  };

  return (
    <PageSpace top={80} bottom={10}>
      <ContactStyles>
        <div className='container'>
          <SEO title='Contact' />
          <PageHeader title='Kontak' className='pageHeader'>
            <ParagraphText>
              Hubungi kami untuk berkolaborasi, berkomunikasi, dan berdiskusi
              tentang isu-isu Kerakyatan dan bagaimana kita dapat bekerjasama
              untuk kemanusiaan.
            </ParagraphText>
            <GatsbyImage image={images} alt='kontak' className='coverImage' />
          </PageHeader>
          <div className='contact__container'>
            <div className='google__maps'>
              <MapContainer
                center={[-6.302453275409871, 106.88008584165314]}
                zoom={30}
                scrollWheelZoom={false}
                style={{ width: '100%', height: 'calc(100vh - 4rem)' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
              </MapContainer>
            </div>
            <div className='contact__details'>
              <div className='contact__details__title'>
                Pimpinan Nasional <br /> Front Perjuangan Pemuda Indonesia
              </div>
              <div className='contact__details__item'>
                <h3>Alamat</h3>
                <a
                  href='https://www.google.com/maps/place/Sekretariat+Nasional+FPPI/@-6.3025333,106.8775324,17z/data=!4m16!1m9!3m8!1s0x2e69ed8943725ff1:0x98f67ff3447a31e8!2sSekretariat+Nasional+FPPI!8m2!3d-6.3025386!4d106.8801073!9m1!1b1!16s%2Fg%2F11sv00pc_t!3m5!1s0x2e69ed8943725ff1:0x98f67ff3447a31e8!8m2!3d-6.3025386!4d106.8801073!16s%2Fg%2F11sv00pc_t?entry=ttu'
                  target='_blank'
                  rel='noreferrer'
                >
                  <b>Sekretariat Nasional FPPI</b> <br />
                  Jl. Puskesmas No.1, RT.10/RW.4, Dukuh, Kec. Kramat jati, Kota
                  Jakarta Timur, Daerah Khusus Ibukota Jakarta 13550
                </a>
                <h3>Email</h3>
                <a href='mailto:rakyatkuasa123@gmail.com'>
                  rakyatkuasa123@gmail.com
                </a>
                <h3>Telepon</h3>
                <p>0812-9894-5139 (Sari)</p>
              </div>
            </div>
          </div>
        </div>
      </ContactStyles>
    </PageSpace>
  );
}

export default Contact;

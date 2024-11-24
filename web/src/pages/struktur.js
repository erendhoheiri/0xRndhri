import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ContactStyles } from '../styles/ContactStyles';

import ParagraphText from '../components/typography/ParagraphText';
import PageHeader from '../components/PageHeader';
import PageSpace from '../components/PageSpace';
import SEO from '../components/seo';
import Teams from '../components/homePage/Teams';
import Roles from '../components/homePage/Roles';



function PengurusNasional() {
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
    <PageSpace top={80} bottom={10}>
    <ContactStyles>
      <div className='container'>
        <SEO title='Struktur Organisasi' />
        <PageHeader title='Pimpinan Nasional 2023-2026' className='pageHeader'>
          <ParagraphText>
           Halaman ini menampilkan struktur kepemimpinan nasional FPPI periode 2023-2026, mencakup nama, jabatan, dan tugas utama setiap pemimpin. Dirancang untuk memberikan transparansi dan informasi jelas tentang peran strategis organisasi dalam mewujudkan visi dan misi perjuangan.
          </ParagraphText>
          <GatsbyImage image={images} alt='kontak' className='coverImage' />
        </PageHeader>
      <div className='container'>
        <Teams/>
        <Roles />
      </div>
      </div>
    </ContactStyles>
  </PageSpace>
  );
}

export default PengurusNasional;

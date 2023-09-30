import React from 'react';
import { Link } from 'gatsby';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';
import { NotFoundPageStyles } from '../styles/NotFoundPageStyles';

function NotFoundPage() {
  return (
    <PageSpace>
      <div className='container'>
        <NotFoundPageStyles>
          <SectionTitle className='title'>Not Found</SectionTitle>
          <ParagraphText>
            Halaman yang ada cari tidak dapat ditemukan. <br /> Silakan kembali
            ke{' '}
            <Link to='/' className='link'>
              Halaman Utama
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;

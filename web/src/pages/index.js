import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { config } from '@fortawesome/fontawesome-svg-core';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSectionV1';
import SejarahSingkat from '../components/homePage/SejarahSingkat';
import Persebaran from '../components/homePage/Persebaran';
import QouteManipol from '../components/homePage/QouteManipol';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
function IndexPage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <div className='container'>
        <SejarahSingkat />
        {/* <Persebaran /> */}
        <QouteManipol
          quote={`Tugas pergerakan adalah menyusun penjelasan sistematis tentang
          revolusi sebagai tindakan melangsungkan pembebasan untuk kelas
          tertindas oleh kelas tertindas dan dalam konteks ketertindasan
          masing-masing. (Manifesto Politik FPPI)`}
        />
        <FeaturedBlogs />
        <TopCategories />
      </div>
      <Analytics />
    </>
  );
}
export default IndexPage;

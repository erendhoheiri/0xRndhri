import React from 'react';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import HeroSection from '../components/homePage/HeroSectionV1';
import SejarahSingkat from '../components/homePage/SejarahSingkat';
import Persebaran from '../components/homePage/Persebaran';
import QouteManipol from '../components/homePage/QouteManipol';
import TopCategories from '../components/homePage/TopCategories';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <div className='container'>
        <SejarahSingkat />
        {/* <Persebaran /> */}
        <QouteManipol />
        <FeaturedBlogs />
        <TopCategories />
      </div>
    </>
  );
}
export default IndexPage;

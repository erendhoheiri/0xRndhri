import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description
  };

  return (
    <Helmet title={seo.title}>
      <meta name='description' content={seo.description} />
      <meta
        name='keywords'
        content='FPPI, Front Perjuangan Pemuda Indonesia, Gerakan Pemuda Indonesia, Organisasi Pemuda, Situs Resmi'
      />
      <meta name='author' content='Front Perjuangan Pemuda Indonesia' />
      <meta name='robots' content='index, follow' />
      <meta
        property='og:title'
        content='Situs Resmi - Front Perjuangan Pemuda Indonesia (FPPI)'
      />
      <meta
        property='og:description'
        content='Jelajahi situs resmi Front Perjuangan Pemuda Indonesia (FPPI).'
      />
      <meta
        name='google-site-verification'
        content='-PIQMM3cBRmVzjarMvwFBY5NXmBd1pXcaWFhP_b72cg'
      />
      <link
        rel='stylesheet'
        href='//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css'
      />
    </Helmet>
  );
};

export default SEO;

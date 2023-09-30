import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles';
import BlogGrid from '../blog/BlogGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';
import { buttonTypes } from '../../constants/buttonTypes';

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            id
            title
            publishedAt
            categories {
              title
              slug {
                current
              }
            }
            coverImage {
              alt
              asset {
                gatsbyImageData
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const featuredBlogs = data.allSanityFeatured.nodes[0].blogs;
  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Kabar Terbaru</SectionTitle>
      <ParagraphText className='featuredBlogs__text'></ParagraphText>
      <BlogGrid blogs={featuredBlogs} />
      <div className='button-wrapper'>
        <ButtonStyles
          className='button-see'
          to={`/blogs`}
          variant={buttonTypes.primary}
        >
          Lebih Banyak..
        </ButtonStyles>
      </div>
    </FeaturedBlogsStyles>
  );
}

export default FeaturedBlogs;

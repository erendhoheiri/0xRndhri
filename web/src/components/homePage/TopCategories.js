import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles';
import CategoryGrid from '../category/CategoryGrid';
import ParagraphText from '../typography/ParagraphText';
import { SectionTitle } from '../typography/Title';
import { ButtonStyles } from '../../styles/buttons/ButtonStyles';
import { buttonTypes } from '../../constants/buttonTypes';

function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;
  return (
    <TopCategoriesStyles>
      <SectionTitle>Pilihan Kategori</SectionTitle>
      <ParagraphText className='info'></ParagraphText>
      <CategoryGrid categories={categories} />
      <div className='button-wrapper'>
        <ButtonStyles
          className='button-see'
          to={`/categories`}
          variant={buttonTypes.primary}
        >
          Lebih Banyak..
        </ButtonStyles>
      </div>
    </TopCategoriesStyles>
  );
}

export default TopCategories;

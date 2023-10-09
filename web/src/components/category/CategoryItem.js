import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, description, slug }) {
  return (
    <CategoryItemStyles>
      <div className='wrapper'>
        <Title className='title'>{title}</Title>
        <div className='text'>
          <MyPortableText value={description} />
        </div>
      </div>
      <Button
        className='button-read'
        to={`/categories/${slug.current}`}
        variant={buttonTypes.outline}
      >
        Selengkapnya
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;

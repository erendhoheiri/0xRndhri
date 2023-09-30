import React from 'react';
import { PageHeaderStyles } from '../styles/PageHeaderStyles';
import ParagraphText from './typography/ParagraphText';
import { SectionTitle } from './typography/Title';

function PageHeader({ title, description, children, className }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle>{title}</SectionTitle>
        <ParagraphText className='white-description'>
          {description}
        </ParagraphText>
        {children}
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;

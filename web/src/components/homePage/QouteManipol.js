import React from 'react';
import { QuoteManipolStyles } from '../../styles/homePage/QuoteManipolStyles';

function QouteManipol({ quote }) {
  return (
    <QuoteManipolStyles>
      <div className='quote'>
        <p>{quote}</p>
      </div>
    </QuoteManipolStyles>
  );
}

export default QouteManipol;

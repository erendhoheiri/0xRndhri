import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <LogoStyles to='/'>
      <IconContext.Provider value={{ color: '#fff' }}>
        <FaRegRegistered />
      </IconContext.Provider>
    </LogoStyles>
  );
}

export default Logo;

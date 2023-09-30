import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <Logo />
        <ParagraphText className='footer__text'>
          Front Perjuangan Pemuda Indonesia didirikan sebagai satuan kesadaran
          dan tindakan memilitankan pengorganisiran tak kenal ampun sebagai
          langkah intensif dan efektif menyusun martabat ekonomi politik Rakyat
          Indonesia menuju kehidupan nasional yang demokratis dan berkedaulatan.
        </ParagraphText>
        <ul className='footer__menuList'>
          {menu.map(item => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className='footer__socialList'>
          {socialLinks.map(item => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <ParagraphText className='copyright'>
          © Pusat Data dan Informasi, FPPI Nasional. {new Date().getFullYear()}.
          All rights reserved.
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;

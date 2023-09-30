import React from 'react';
import {
  Container,
  TitleContainer,
  SubTitle,
  Title,
  Button,
  Jargon
} from '../../styles/homePage/HeroSectionV1Styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <Container id='hero'>
      <TitleContainer>
        <Title>Website Resmi</Title>
        <SubTitle>Front Perjuangan Pemuda Indonesia</SubTitle>
        <Jargon>
          Mendidik Rakyat dengan Pergerakan, Mendidik Penguasa dengan
          Perlawanan.
        </Jargon>
      </TitleContainer>
      <Button to='about-us'>
        Tentang kami
        <AiOutlineArrowRight />
      </Button>
    </Container>
  );
};

export default Hero;

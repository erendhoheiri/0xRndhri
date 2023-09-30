import styled from 'styled-components';
import { Link } from 'gatsby';

export const Container = styled.div`
  background-image: radial-gradient(
      circle at 37% 80%,
      hsla(180, 0%, 7%, 0.1) 0%,
      hsla(180, 0%, 7%, 0.1) 45%,
      transparent 45%,
      transparent 73%,
      transparent 73%,
      transparent 100%
    ),
    radial-gradient(
      circle at 60% 45%,
      hsla(180, 0%, 7%, 0.1) 0%,
      hsla(180, 0%, 7%, 0.1) 67%,
      transparent 67%,
      transparent 71%,
      transparent 71%,
      transparent 100%
    ),
    radial-gradient(
      circle at 23% 84%,
      hsla(180, 0%, 7%, 0.1) 0%,
      hsla(180, 0%, 7%, 0.1) 55%,
      transparent 55%,
      transparent 97%,
      transparent 97%,
      transparent 100%
    ),
    radial-gradient(
      circle at 52% 76%,
      hsla(180, 0%, 7%, 0.1) 0%,
      hsla(180, 0%, 7%, 0.1) 37%,
      transparent 37%,
      transparent 95%,
      transparent 95%,
      transparent 100%
    ),
    radial-gradient(
      circle at 50% 81%,
      hsla(180, 0%, 7%, 0.1) 0%,
      hsla(180, 0%, 7%, 0.1) 79%,
      transparent 79%,
      transparent 85%,
      transparent 85%,
      transparent 100%
    ),
    linear-gradient(45deg, rgba(150, 40, 27, 0.9), rgba(207, 0, 15, 0.9)),
    url('https://kongres-fppi.vercel.app/images/hero.jpg');
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (max-height: 768px) {
    gap: 3rem;
    height: 100vh;
  }

  @media (max-height: 480px) {
    gap: 1rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Text = styled.h1`
  text-align: center;
  color: white;
`;

export const Title = styled(Text)`
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  color: transparent;
  -webkit-text-stroke: 3px white;
  @media (max-width: 1024px) {
    font-size: 6rem;
    -webkit-text-stroke: 2px white;
  }
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const SubTitle = styled(Text)`
  font-size: 5.5rem;
  font-weight: 800;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Jargon = styled(Text)`
  font-size: 2.5rem;
  margin: 0;
  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Button = styled(Link)`
  border: 2px solid currentColor;
  background: transparent;
  border-radius: 3rem;
  color: white;
  font-size: 2rem;
  padding: 1rem 2rem;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    transition: 0.2s transform ease-in-out;
    will-change: transform;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

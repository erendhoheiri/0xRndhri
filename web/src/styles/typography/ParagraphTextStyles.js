import styled from 'styled-components';

export const ParagraphTextStyles = styled.p`
  font-family: 'Inter', sans-serif;
  color: var(--black-1);
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

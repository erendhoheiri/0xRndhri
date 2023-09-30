import styled from 'styled-components';

export const AboutUsStyles = styled.div`
  .aboutus__container {
    margin-top: 5rem;
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }
    .item__detail {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      text-align: justify;
    }
    .space {
      margin-bottom: 1rem;
    }
    .quote {
      font-size: 1.7rem;
      font-style: italic;
      text-align: right;
      width: 100%;
    }
    .last-quote {
      font-family: 'Dancing Script', cursive;
      font-size: 5rem;
      font-weight: bold;
      text-align: center;
      margin: 5rem 0 1rem 0;
    }
  }

  .pageHeader {
    position: relative;
    padding: 2rem 0;
    z-index: 1;
    color: var(--white);
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #fdfdfd, #f2f2f2 30%, #4a46eb14);
      z-index: -1;
    }
    .coverImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  @media only screen and (max-width: 768px) {
    .pageHeader {
      padding: 0;
      &:after {
        display: none;
      }
    }
    .coverImage {
      display: none;
    }
  }
`;

import styled from 'styled-components';

export const ContactStyles = styled.div`
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
  .contact__container {
    padding: 10rem 0;
    display: flex;

    .google__maps {
      position: relative;
      padding-bottom: 50%;
      width: 50%;
      height: 0;
      overflow: hidden;
    }
    .contact__details {
      flex: 1;
      padding: 0 2rem;
      .contact__details__title {
        font-size: 3.1rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }
      .contact__details__item {
        margin-bottom: 2.5rem;
        h3 {
          font-size: 2rem;
          margin: 1.5rem 0;
        }
        p,
        a {
          font-size: 1.8rem;
          :hover {
            color: var(--primary);
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .contact__container {
      display: flex;
      padding-top: 1rem;
      flex-direction: column !important;
      .google__maps {
        width: 100%;
        height: 100%;
        padding-bottom: 0;
      }
      .contact__details {
        padding: 0;
      }
      .contact__details__title {
        margin-top: 2rem;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }
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

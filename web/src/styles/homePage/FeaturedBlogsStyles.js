import styled from 'styled-components';

export const FeaturedBlogsStyles = styled.div`
  padding: 5rem 0;
  padding-top: 4rem;
  // @media screen and (max-width: 1440px) {
  //   padding-top: 40%;
  // }
  // @media screen and (max-width: 1024px) {
  //   padding-top: 50rem !important;
  // }
  // @media screen and (max-width: 768px) {
  //   padding-top: 30% !important;
  // }
  // @media screen and (max-width: 480px) {
  //   padding-top: 40rem !important;
  // }
  // @media screen and (max-width: 320px) {
  //   padding-top: 50rem !important;
  // }
  .featuredBlogs__text {
    max-width: 450px;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    .button-see {
      text-align: center;
      background: var(--secondary);
      border-radius: 12px;
      &:hover {
        background: var(--primary);
        cursor: pointer;
      }
    }
  }
`;

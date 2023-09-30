import styled from 'styled-components';

export const SingleBlogStyles = styled.div`
  margin: 0 auto;
  .blog-cover-image {
    width: 100%;
    height: 400px;
    margin-bottom: 2rem;
    filter: grayscale(100%);
  }
  .title {
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  .publishedAt {
    margin-bottom: 0.5rem;
  }
  .categoriesText,
  .author,
  .publishedAt {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    svg {
      height: 20px;
      width: 20px;
    }
    a {
      color: var(--primary);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hr {
    margin: 2rem 0;
    color: var(--gray);
  }
  .body {
    margin-top: 2rem;
    h1,
    h2,
    h3,
    h4 {
      margin: 1rem 0;
    }
    .bodyImage {
      margin: 0 2rem 2rem 0;
      float: left;
      width: 40%;
    }
    .bodyCode {
      margin: 2rem 0;
      font-size: 2rem;
    }
  }
  .share__button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    margin-top: 4rem;
    .share__button__title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
  }
`;

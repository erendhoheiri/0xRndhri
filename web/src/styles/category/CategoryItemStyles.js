import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
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
    linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),
    url('https://cdn.sanity.io/images/o7gijkpe/production/3f7cc36df1e977a5648397b36ca6f8ababf908b6-640x427.jpg');
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.25);
  color: var(--secondary);
  padding: 2rem;
  border-radius: 12px;
  .title {
    margin-bottom: 1rem;
  }
  .text {
    margin-bottom: 2rem;
  }
  .button-read {
    border: none;
    border-radius: 12px;
    background: var(--white-1);
    color: var(--secondary);
    &:hover {
      background: var(--secondary);
      cursor: pointer;
      color: var(--white-1);
    }
  }
`;

import styled from 'styled-components';

export const SejarahSingkatStyles = styled.div`
  padding: 7rem 0rem;
  @media screen and (max-width: 768px) {
    padding: 5rem 0rem;
  }
  h1 {
    font-size: 5rem;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
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

export const SejarahSingkatContent = styled.div`
  padding-top: 2rem;
  font-size: 2rem;
  line-height: 3rem;
  // text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }
`;

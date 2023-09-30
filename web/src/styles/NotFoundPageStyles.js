import styled from 'styled-components';

export const NotFoundPageStyles = styled.div`
  text-align: center;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    font-size: 5rem;
  }
  .link {
    color: var(--primary);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

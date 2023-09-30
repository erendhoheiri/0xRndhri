import styled from 'styled-components';

export const TopCategoriesStyles = styled.div`
  padding: 5rem 0;
  .info {
    max-width: 400px;
  }
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
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

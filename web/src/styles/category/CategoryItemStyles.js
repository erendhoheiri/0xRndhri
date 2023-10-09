import styled from 'styled-components';

export const CategoryItemStyles = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url('https://cdn.sanity.io/images/o7gijkpe/production/3f7cc36df1e977a5648397b36ca6f8ababf908b6-640x427.jpg');
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.25);
  color: var(--secondary);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  justify-content: space-between;
  .title {
    margin-bottom: 1rem;
  }
  .text {
    margin-bottom: 2rem;
  }
  .button-read {
    border: none;
    border-radius: 12px;
    background: var(--white-2);
    color: var(--secondary);
    width: 100%;
    text-align: center;
    &:hover {
      background: var(--secondary);
      cursor: pointer;
      color: var(--white-1);
    }
  }
`;

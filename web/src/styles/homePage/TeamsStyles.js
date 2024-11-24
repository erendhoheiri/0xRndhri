import styled from 'styled-components';

export const TeamsStyles = styled.div`
  padding: 5rem 0;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const TeamCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 2rem;
    color: #333333;
    margin-bottom: 0.5rem;
  }

  .position {
    font-size: 1.25rem;
    color: #555555;
    margin-bottom: 0.75rem;
    font-style: italic;
  }

  .description {
    font-size: 0.875rem;
    color: #777777;
    line-height: 1.5;
  }
`;

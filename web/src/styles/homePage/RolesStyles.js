import styled from 'styled-components';

export const RolesStyles = styled.div`
  // padding: 4rem 2rem;
  background-color: #f9fafb;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #222;
  }
`;

export const RoleCard = styled.div`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const RoleTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: #007bff;
  outline: none;

  &:hover {
    color: #0056b3;
  }
`;

export const RoleDescription = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #555;

  ul {
    list-style: disc !important;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

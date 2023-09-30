import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 20px;
`;

export const Text = styled.span`
  color: #444;
  font-size: 24px;
  padding-bottom: 16px;
`;

export const UserInput = styled.input`
  height: 40px;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #eee;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #444;
  font-size: 16px;

  :focus {
    border-color: #ddd;
  }

  :hover {
    border-color: #ddd;
  }
`;

export const Button = styled.button`
  height: 40px;
  text-align: center;
  align-items: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  color: #fff;
  background-color: var(--primary);
  margin-top: 5px;
  margin-bottom: 16px;
  cursor: pointer;
`;

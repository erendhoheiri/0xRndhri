import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 5rem 0 2rem 0;
  text-align: center;
  background-color: var(--black-1);
  .footer__text {
    text-align: center;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 600px;
    color: var(--white-1);
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--primary);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--white-1);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    text-align: center;
    color: var(--white-1);
    font-size: 1.2rem;
  }
`;

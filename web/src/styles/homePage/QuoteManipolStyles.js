import styled from 'styled-components';

export const QuoteManipolStyles = styled.div`
  margin: 5rem 0;
  &::before {
    content: '';
    width: 100%;
    height: 280px;
    @media screen and (max-width: 480px) {
      height: 320px;
    }
    @media screen and (max-width: 768px) {
      height: 450px;
    }
    @media screen and (max-width: 1024px) {
      height: 300px;
    }
    z-index: -1;
    position: absolute;
    left: 0;
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
      linear-gradient(45deg, rgba(150, 40, 27, 0.9), rgba(207, 0, 15, 0.9)),
      url('https://kongres-fppi.vercel.app/images/1.jpg');
  }
  .quote {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5rem 1rem;
    p {
      max-width: 900px;
      color: var(--white);
      font-size: 2.5rem;
      text-align: center;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
      @media screen and (max-width: 1024px) {
        font-size: 2.4rem;
        padding: 0 3rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 2.3rem;
        padding: 0 2rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1.65rem;
        padding: 0rem;
      }
    }
  }
`;

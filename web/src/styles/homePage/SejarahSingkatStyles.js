import styled from 'styled-components';

export const SejarahSingkatStyles = styled.div`
  // &::before {
  //   content: '';
  //   width: 100%;
  //   height: 50%;
  //   @media screen and (max-width: 480px) {
  //     height: 320px;
  //   }
  //   @media screen and (max-width: 768px) {
  //     height: 450px;
  //   }
  //   @media screen and (max-width: 1024px) {
  //     height: 300px;
  //   }
  //   z-index: -1;
  //   position: absolute;
  //   left: 0;
  //   background-image: radial-gradient(
  //       circle at 37% 80%,
  //       hsla(180, 0%, 7%, 0.1) 0%,
  //       hsla(180, 0%, 7%, 0.1) 45%,
  //       transparent 45%,
  //       transparent 73%,
  //       transparent 73%,
  //       transparent 100%
  //     ),
  //     radial-gradient(
  //       circle at 60% 45%,
  //       hsla(180, 0%, 7%, 0.1) 0%,
  //       hsla(180, 0%, 7%, 0.1) 67%,
  //       transparent 67%,
  //       transparent 71%,
  //       transparent 71%,
  //       transparent 100%
  //     ),
  //     radial-gradient(
  //       circle at 23% 84%,
  //       hsla(180, 0%, 7%, 0.1) 0%,
  //       hsla(180, 0%, 7%, 0.1) 55%,
  //       transparent 55%,
  //       transparent 97%,
  //       transparent 97%,
  //       transparent 100%
  //     ),
  //     radial-gradient(
  //       circle at 52% 76%,
  //       hsla(180, 0%, 7%, 0.1) 0%,
  //       hsla(180, 0%, 7%, 0.1) 37%,
  //       transparent 37%,
  //       transparent 95%,
  //       transparent 95%,
  //       transparent 100%
  //     ),
  //     radial-gradient(
  //       circle at 50% 81%,
  //       hsla(180, 0%, 7%, 0.1) 0%,
  //       hsla(180, 0%, 7%, 0.1) 79%,
  //       transparent 79%,
  //       transparent 85%,
  //       transparent 85%,
  //       transparent 100%
  //     ),
  //     linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
  //     url('https://kongres-fppi.vercel.app/images/1.jpg');
  // }
  padding: 7rem 7rem 5rem 7rem;
  @media screen and (max-width: 768px) {
    padding: 6rem 5rem;
  }
  h1 {
    font-size: 5rem;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 4rem;
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
  text-align: justify;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

import styled from "styled-components";

const HomeStyle = styled.div`
  .home__wrapper {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 64px 0 64px 0;
    img {
      width: 100%;
    }
  }

  .home__btn-wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: 700px;
  }

  .home__img {
    transform: rotate(20deg);
    animation: rock 4s infinite linear;
  }

  @keyframes rock {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default HomeStyle;

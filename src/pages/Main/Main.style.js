import styled from "styled-components";

const MainStyle = styled.div`
  .main__wrapper {
    height: 100vh;
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
  }

  .main__conditions-wrapper {
    width: fit-content;
  }

  .main__game-board-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .main__game-persons {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .main__game-question-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main__question-box-wrapper {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9d1d3;
    background-color: #c4c4c41a;
    font-size: 100px;
  }

  .main__game-vs {
    color: #c9d1d3;
    font-size: 100px;
    font-weight: 700;
  }

  .main__person-name {
    font-size: 32px;
    font-weight: 700;
    color: #b4b1b1;
    padding: 30px;
  }

  .main__game-list {
    height: 100vh;
    background-color: #c4c4c41a;
    padding: 18px;
    transform: translateY(-80px);
    width: 286px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .answer {
    font-size: 50px;
  }
  .main__res-wrapper {
    height: 437px;
    overflow: auto;
    p {
      color: #b4b1b1;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .main__res-wrapper::-webkit-scrollbar {
    width: 8px;
  }

  .main__res-wrapper::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .main__res-wrapper::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  .main__res-wrapper::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .main__date-wrapper {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    P {
      color: #b4b1b1;
      font-size: 22px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1140px) {
    .main__wrapper {
      flex-direction: column;
      gap: 30px;
    }

    .main__conditions-wrapper {
      width: 100%;
      display: flex;
      gap: 10px;
      justify-content: space-between;
      flex-direction: row;
    }
    .answer {
      display: none;
    }

    .main__game-list {
      padding: 10px;
      transform: translateY(0px);
      width: 100%;
      P {
        padding: 5px !important;
      }
    }

    .main__res-wrapper {
      height: 100px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      P {
        height: auto;
      }
    }

    .main__person-name {
      padding: 10px;
    }

    .main__date-wrapper {
      height: 100px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .main__question-box-wrapper {
      width: 150px;
      height: 150px;
    }
    .main__game-persons {
      gap: 30px;
    }
  }

  @media screen and (max-width: 800px) {
    .main__res-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 570px) {
    .main__res-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
    .main__date-wrapper {
      grid-template-columns: repeat(1, 1fr);
      padding: 25px 0 0 0;
    }

    .main__game-list {
      display: block;
    }
  }

  .card__box-wrapper {
    img {
      width: 50px;
    }
  }
  .main__question-box-wrapper {
    width: 80px;
    height: 80px;
    font-size: 30px;
  }

  .main__game-vs {
    font-size: 40px;
  }

  .main__person-name {
    font-size: 20px;
  }
  .main__question-box-wrapper {
    img {
      width: 50px;
    }
  }
`;
export default MainStyle;

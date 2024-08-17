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
  }

  .answer {
    font-size: 50px;
  }
  .main__res-wrapper {
    height: 650px;
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
`;
export default MainStyle;

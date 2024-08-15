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
`;
export default MainStyle;

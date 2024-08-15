import styled from "styled-components";

const MainStyle = styled.div`
  .main__wrapper {
    height: 100vh;
    padding-top: 10%;
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
  }

  .main__game-persons .main__game-list {
    border: 1px solid black;
    width: 300px;
  }
`;
export default MainStyle;

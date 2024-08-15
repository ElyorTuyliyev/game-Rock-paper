import Container from "../../container";
import MainStyle from "./Main.style";
import Hand from "../../assets/images/hand.png";
import Leadership from "../../assets/images/leadership.png";
import Scissors from "../../assets/images/scissors.png";
import Card from "./Components/cards";
import Button from "../../Components/Buttons";
import { useState } from "react";

const Main = () => {
  const [activeCard, setActiveCard] = useState();
  const [randomCard, setRandomCard] = useState();
  const [res, setRes] = useState();
  const [data, setData] = useState();
  const [allRes, setAllRes] = useState([]);

  const card = [
    {
      img: Leadership,
      alt: "Leadership",
      name: "Rock",
      damages: {
        2: false,
        1: true,
      },
      id: 3,
    },
    {
      img: Hand,
      alt: "hand_img",
      name: "Paper",
      damages: {
        1: false,
        3: true,
      },
      id: 2,
    },
    {
      img: Scissors,
      alt: "hand_img",
      name: "Scissors",
      id: 1,
      damages: {
        3: false,
        2: true,
      },
    },
  ];

  const images = { 1: Scissors, 2: Hand, 3: Leadership };

  const startGame = () => {
    const arr = [];
    const random = Math.floor(Math.random() * card.length);
    setRandomCard(card[random].img);

    setAllRes([...allRes, { user: activeCard, computer: random }]);

    if (card[random].damages[activeCard] === true) {
      setRes("Computer win");
    } else if (card[random].damages[activeCard] == undefined) {
      setRes("Draw");
    } else {
      setRes("You win");
    }
  };

  const handleCard = (id) => {
    setActiveCard(id);
  };

  return (
    <MainStyle>
      <Container>
        <div className="main__wrapper">
          <div className="main__conditions-wrapper">
            {card.map((item) => (
              <Card onclick={handleCard} key={item.name} {...item} />
            ))}
          </div>
          <div className="main__game-board-wrapper">
            <div className="main__game-persons">
              <div className="main__game-question-wrapper">
                <div className="main__question-box-wrapper">
                  {activeCard ? <img src={images[activeCard]} /> : "?"}
                </div>
                <p className="main__person-name"> You</p>
              </div>
              <p className="main__game-vs">VS</p>
              <div className="main__game-question-wrapper">
                <div className="main__question-box-wrapper">
                  {randomCard ? <img src={randomCard} /> : "?"}
                </div>
                <p className="main__person-name"> Computer</p>
              </div>
            </div>
            <Button onclick={startGame} variant={"green"}>
              Play
            </Button>
            <p className="answer">Result: {res}</p>
          </div>
          <div className="main__game-list">
            <p
              style={{
                fontSize: "20px",
                color: "GrayText",
                textAlign: "center",
                padding: "10px 0 20px 0 ",
                borderBottom: "1px solid #cacaca",
              }}
            >
              Game history
            </p>
            <p>
              {allRes.map(({ user, computer }) => (
                <h1>user: {user}</h1>
              ))}
            </p>
          </div>
        </div>
      </Container>
    </MainStyle>
  );
};

export default Main;

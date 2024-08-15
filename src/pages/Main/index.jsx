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
  const images = { Scissors: Scissors, Paper: Hand, Rock: Leadership };

  const card = [
    {
      img: Leadership,
      alt: "Leadership",
      name: "Rock",
      id: 3,
    },
    {
      img: Hand,
      alt: "hand_img",
      name: "Paper",
      id: 2,
    },
    {
      img: Scissors,
      alt: "hand_img",
      name: "Scissors",
      id: 1,
    },
  ];

  const startGame = () => {
    const random = Math.floor(Math.random() * card.length);
    setRandomCard(card[random].img);

    if (activeCard === card[random].name) {
      console.log("you win");
    } else {
      console.log("you lose ");
    }

    console.log(card[random].name);
  };

  // console.log(activeCard);

  const handleCard = (name) => {
    setActiveCard(name);
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
          </div>
          <div className="main__game-list"></div>
        </div>
      </Container>
    </MainStyle>
  );
};

export default Main;

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
  const [counters, setCounters] = useState(0);

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
    const newDate = new Date();
    const year = newDate.getFullYear();
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    let result = "";

    setData(`${hours}:${minutes} , ${day}.${month}.${year}`);

    setCounters((prev) => prev + 1);

    if (!activeCard) {
      alert("please check  your card");
    } else {
      const random = Math.floor(Math.random() * card.length);
      setRandomCard(card[random].img);

      if (card[random].damages[activeCard] === true) {
        result = "Computer win";
      } else if (card[random].damages[activeCard] === undefined) {
        result = "Draw";
      } else {
        result = "You win";
      }

      setRes(result);
      setAllRes([...allRes, { res: result }]);
    }
  };

  const handleCard = (id) => {
    setActiveCard(id);
  };

  const scrollToEndHandler = () => {
    allRes.current?.scroll({
      behavior: "smooth",
      top: allRes.current.scrollHeight,
    });
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
            <p
              style={{
                position: "absolute",
                top: "50px",
                color: "yellowgreen",
                fontWeight: "500",
              }}
              className="answer"
            >
              Result: {res}
            </p>
            <div className="main__game-persons">
              <div className="main__game-question-wrapper">
                <div className="main__question-box-wrapper">
                  {activeCard ? (
                    <img src={images[activeCard]} alt="rock-paper-scissors" />
                  ) : (
                    "?"
                  )}
                </div>
                <p className="main__person-name"> You</p>
              </div>
              <p className="main__game-vs">VS</p>
              <div className="main__game-question-wrapper">
                <div className="main__question-box-wrapper">
                  {randomCard ? (
                    <img src={randomCard} alt="rock-paper-scissors" />
                  ) : (
                    "?"
                  )}
                </div>
                <p className="main__person-name"> Computer</p>
              </div>
            </div>
            <Button
              disabled={!activeCard}
              onclick={startGame}
              variant={"green"}
              scrollToEndHandler={scrollToEndHandler}
            >
              Play
            </Button>
          </div>
          <div className="main__game-list">
            <p
              style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#bababa",
                textAlign: "center",
                padding: "10px 0 20px 0 ",
                borderBottom: "1px solid #cacaca",
              }}
            >
              Game history
            </p>
            <div className="main__res-wrapper">
              {allRes.map((item, index) => (
                <p>
                  {index + 1}-game: {item?.res}
                </p>
              ))}
            </div>
            <div className="main__date-wrapper">
              <p> Winner: you</p>
              <p> Game: #{counters}</p>
              <p> Date: {data}</p>
              <p> Type: You vs Computer</p>
            </div>
          </div>
        </div>
      </Container>
    </MainStyle>
  );
};

export default Main;

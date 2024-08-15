import Container from "../../container";
import MainStyle from "./Main.style";
import Hand from "../../assets/images/hand.png";
import Leadership from "../../assets/images/leadership.png";
import Scissors from "../../assets/images/scissors.png";
import Card from "./Components/cards";
import Button from "../../Components/Buttons";

const Main = () => {
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

  return (
    <MainStyle>
      <Container>
        <div className="main__wrapper">
          <div className="main__conditions-wrapper">
            {card.map((item) => (
              <Card key={item.name} {...item} />
            ))}
          </div>
          <div className="main__game-board-wrapper">
            <div className="main__game-persons">
              <div>
                <div>?</div>
                <p>You</p>
              </div>
              <p>VS</p>
              <div>
                <div>?</div>
                <p>Computer</p>
              </div>
            </div>
            <Button variant={"green"}>start</Button>
          </div>
          <div className="main__game-list">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Recusandae, repellat sunt nobis suscipit laudantium temporibus id
            accusantium unde, tempora numquam adipisci commodi? Natus facere
            voluptatibus magni laborum vitae perferendis quasi.WWS
          </div>
        </div>
      </Container>
    </MainStyle>
  );
};

export default Main;

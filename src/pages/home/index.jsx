import StyledButton from "../../Components/Buttons/Button.style";
import Container from "../../container";
import HomeStyle from "./home.style";
import logo from "../../assets/images/logo.png";
import Button from "../../Components/Buttons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeStyle>
      <Container>
        <div className="home__wrapper">
          <img src={logo} alt="logo" />
        </div>

        <div className="home__btn-wrapper">
          <Link>
            <Button variant="blue">Play with computer</Button>
          </Link>
          <Link>
            <Button variant="blue">Play with friends</Button>
          </Link>
        </div>
      </Container>
    </HomeStyle>
  );
};
export default Home;

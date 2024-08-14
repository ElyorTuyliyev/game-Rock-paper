import StyledButton from "../../Components/Buttons/Button.style";
import Container from "../../container";
import HomeStyle from "./home.style";
import logo from "../../assets/images/logo.png";

const Home = () => {
  return (
    <HomeStyle>
      <Container>
        <div className="home__wrapper">
          <img src={logo} alt="logo" />
        </div>

        <div className="home__btn-wrapper">
          <StyledButton variant="blue">Play with computer</StyledButton>
          <StyledButton variant="blue">Play with friends</StyledButton>
        </div>
      </Container>
    </HomeStyle>
  );
};
export default Home;

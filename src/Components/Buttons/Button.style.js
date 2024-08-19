import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 60px;
  max-width: 409px;
  width: 100%;
  border: none;
  padding: 12px 15px;
  font-size: 25px;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "blue"
      ? "#10a4f8"
      : props.variant === "green"
      ? "#0bd4a4"
      : "white"};

  &:disabled {
    opacity: 0.5;
    background-color: gainsboro;
    color: gray;
    cursor: not-allowed;
  }
  @media screen and (max-width: 570px) {
    font-size: 15px;
  }
`;
export default StyledButton;

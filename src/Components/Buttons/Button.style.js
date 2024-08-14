import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 60px;
  min-width: 409px;
  border: none;
  padding: 24px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "blue"
      ? "#10a4f8"
      : props.variant === "green"
      ? "#0bd4a4"
      : "white"};
`;
export default StyledButton;

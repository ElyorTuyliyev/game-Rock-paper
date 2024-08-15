import StyledButton from "./Button.style";

const Button = ({ children, variant, onclick }) => {
  return (
    <StyledButton onClick={onclick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

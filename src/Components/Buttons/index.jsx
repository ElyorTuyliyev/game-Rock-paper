import StyledButton from "./Button.style";

const Button = ({ disabled, children, variant, onclick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onclick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;

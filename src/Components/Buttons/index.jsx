import StyledButton from "./Button.style";

const Button = ({ children, variant }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};

export default Button;

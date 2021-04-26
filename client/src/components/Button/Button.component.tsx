import React from "react";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
  width?: string;
  onClick?: (arg: any) => void;
}

const Button: React.FC<ButtonProps> = ({ children, width, onClick }) => {
  return (
    <StyledButton onClick={onClick} width={width}>
      {children}
    </StyledButton>
  );
};

export default Button;

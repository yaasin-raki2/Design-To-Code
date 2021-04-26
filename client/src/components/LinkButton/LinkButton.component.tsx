import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { StyledButton } from "../Button/Button.styles";

interface ButtonProps {
  to: LinkProps["to"];
  width?: string;
  onClick?: (arg: any) => void;
}

const Button: React.FC<ButtonProps> = ({ children, to, width, onClick }) => {
  return (
    <div>
      <Link to={to}>
        <StyledButton onClick={onClick} width={width}>
          {children}
        </StyledButton>
      </Link>
    </div>
  );
};

export default Button;

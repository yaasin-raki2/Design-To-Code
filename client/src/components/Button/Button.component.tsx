import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
  to: LinkProps["to"];
}

const Button: React.FC<ButtonProps> = ({ children, to }) => {
  return (
    <div>
      <StyledButton>
        <Link to={to} color="#fff">
          {children}
        </Link>
      </StyledButton>
    </div>
  );
};

export default Button;

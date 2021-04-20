import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { StyledButton } from "./Button.styles";

interface ButtonProps {
  to: LinkProps["to"];
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, width }) => {
  return (
    <div>
      <Link to={to}>
        <StyledButton width={width}>Sign Up</StyledButton>
      </Link>
    </div>
  );
};

export default Button;

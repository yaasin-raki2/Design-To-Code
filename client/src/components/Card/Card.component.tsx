import React from "react";

import { StyledCard } from "./Card.styles";

interface CardProps {
  width?: string;
  height?: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ width, height, color, children }) => {
  return (
    <div>
      <StyledCard width={width} height={height} color={color}>
        {children}
      </StyledCard>
    </div>
  );
};

export default Card;

import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export const Button = styled(Link)`
  background-color: ${({ theme }) => theme.primary};
  width: 93px;
  height: 39px;
  padding: 10px 15px;
  border-radius: 10px;
  transition: 0.5s;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    filter: brightness(120%);
  }

  :active {
    transform: scale(0.5);
  }
`;

export const LinksWrapper = styled.div`
  width: 786px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

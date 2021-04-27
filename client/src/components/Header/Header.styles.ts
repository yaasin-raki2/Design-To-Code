import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  width: 800px;
  margin: auto;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 16px;
`;

export const Button = styled(Link)`
  background-color: #0e70f3;
  border: 1px solid #0e70f3;
  padding: 10px 15px;
  border-radius: 10px;
  transition: 0.5s;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  text-align: center;

  :hover {
    background-color: #fff;
    color: #0e70f3;
  }

  :active {
    transform: scale(0.5);
  }
`;

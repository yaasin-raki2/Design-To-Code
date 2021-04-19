import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100px;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => (props.color ? props.color : "black")};
`;

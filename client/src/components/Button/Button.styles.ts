import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #0e70f3;
  border: 1px solid #0e70f3;
  padding: 20px;
  border-radius: 15px;
  transition: 0.5s;

  a {
    color: #fff;
    font-size: 20px;
    transition: 0.1s;
  }

  :hover {
    background-color: #fff;

    a {
      color: #0e70f3;
    }
  }
`;

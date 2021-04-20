import styled from "styled-components";

export const StyledButton = styled.button<{ width?: string }>`
  background-color: #0e70f3;
  border: 1px solid #0e70f3;
  padding: 20px;
  border-radius: 15px;
  width: ${(props) => (props.width ? props.width : "120px")};
  transition: 0.5s;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #fff;
    color: #0e70f3;
  }

  :active {
    transform: scale(0.5);
  }
`;

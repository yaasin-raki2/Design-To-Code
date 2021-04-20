import styled from "styled-components";

export const StyledCard = styled.div<{ width?: string; height?: string; color?: string }>`
  width: ${(props) => (props.width ? props.width : "500px")};
  height: ${(props) => (props.height ? props.height : "600px")};
  background-color: ${(props) => (props.color ? props.color : "white")};
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

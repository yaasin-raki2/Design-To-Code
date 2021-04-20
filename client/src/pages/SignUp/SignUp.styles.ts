import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const BigText = styled.h1`
  font-weight: 500;
  font-size: 40px;
  margin: 0;
`;

export const SmallText = styled.h3`
  font-weight: normal;
  font-size: 20px;
  margin: 0;

  a {
    color: #0e70f3;
    text-decoration: underline;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

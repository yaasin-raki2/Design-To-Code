import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const FromWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  height: 275px;
  margin-top: -50px;

  div {
    position: relative;

    h6 {
      color: red;
      font-weight: 300;
      position: absolute;
      top: 60%;
    }
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
`;

export const BigText = styled.h1`
  font-weight: 500;
  font-size: 36px;
  margin: 0;
`;

export const SmallText = styled.h3`
  font-weight: normal;
  font-size: 18px;
  margin: 0;

  a {
    color: #0e70f3;
    text-decoration: underline;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const InputsWrapper = styled.form`
  margin-top: -50px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const FirstInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input[type="text"] {
    width: 250px;
  }
`;

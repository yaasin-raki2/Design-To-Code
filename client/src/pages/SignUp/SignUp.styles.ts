import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
`;

export const InputsWrapper = styled.div`
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

export const DropDown = styled.div`
  position: relative;

  select {
    display: inline-block;
    position: relative;
    outline: none;
    appearance: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    height: 65.2px;
    width: 180px;
    border: 1px solid #f4f4f4;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    padding: 10px 30px 10px 30px;
    background-color: #ffffff;
    cursor: pointer;
    white-space: nowrap;

    :hover {
      background-color: #eeeeee;
    }
  }

  :after {
    content: "";
    position: absolute;
    top: 53%;
    right: 25px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #0e70f3;
  }
`;

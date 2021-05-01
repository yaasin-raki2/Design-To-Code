import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #8443d8;
  cursor: pointer;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: ${({ theme }) => theme.background};
    transition: 0.2s;
  }
`;

export const CheckBoxInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  cursor: pointer;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme }) => theme.primary};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

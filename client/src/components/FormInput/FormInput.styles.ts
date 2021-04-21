import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  left: -14px;
  font-size: 12px;
  opacity: 0;
`;

export const Group = styled.div`
  position: relative;
`;

export const FormInputContainer = styled.input`
  width: 450px;
  height: 65.2px;
  border: none;
  outline: none;
  background: #f4f4f4;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding-left: 50px;
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: #a3a3a3;
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 17px;
  transition: 300ms ease all;
  &.hide {
    ${shrinkLabelStyles}
  }
`;

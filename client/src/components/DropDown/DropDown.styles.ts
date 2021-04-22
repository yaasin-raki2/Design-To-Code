import styled from "styled-components";

export const DropDownWrapper = styled.div<{ width?: string }>`
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
    width: ${(props) => (props.width ? props.width : "180px")};
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

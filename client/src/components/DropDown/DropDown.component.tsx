import React from "react";

import { DropDownWrapper } from "./DropDown.styles";

interface DropDownProps {
  dropDown: string;
  setDropDown: (arg0: string) => void;
  list: string[];
  width?: string;
}

const DropDown: React.FC<DropDownProps> = ({ dropDown, setDropDown, list, width }) => {
  const capitalizeWords = (string: string) => {
    return string.replace(/(?:^|\s)\S/g, (word: string) => {
      return word.toUpperCase();
    });
  };
  return (
    <DropDownWrapper width={width}>
      <select value={dropDown} onChange={(e) => setDropDown(e.target.value)}>
        <option value="">Select One</option>
        {list.map((item) => (
          <option value={item}>{capitalizeWords(item)}</option>
        ))}
      </select>
    </DropDownWrapper>
  );
};

export default DropDown;

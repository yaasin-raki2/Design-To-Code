import React from "react";

import { DropDownWrapper } from "./DropDown.styles";

interface DropDownProps {
  userCredentials: { userType: string };
  setCredentials: (args: any) => void;
  list: string[];
  width?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  userCredentials,
  setCredentials,
  list,
  width,
}) => {
  const capitalizeWords = (string: string) => {
    return string.replace(/(?:^|\s)\S/g, (word: string) => {
      return word.toUpperCase();
    });
  };

  return (
    <DropDownWrapper width={width}>
      <select
        value={userCredentials.userType}
        onChange={(e) => setCredentials({ ...userCredentials, userType: e.target.value })}
        required
      >
        <option value="">Select One</option>
        {list.map((item) => (
          <option key={item} value={item}>
            {capitalizeWords(item)}
          </option>
        ))}
      </select>
    </DropDownWrapper>
  );
};

export default DropDown;

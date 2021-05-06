import { FC } from "react";

import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from "./CheckBox.styles";

interface CheckBoxProps {
  onChange: () => void;
  checkboxValue: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ onChange, checkboxValue }) => {
  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        id="checkbox"
        type="checkbox"
        checked={checkboxValue}
        onChange={onChange}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default CheckBox;

import { FC, useState, ChangeEvent } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from "./CheckBox.styles";

interface CheckBoxProps {
  onChange: (value: boolean) => void;
}

const CheckBox: FC<CheckBoxProps> = ({ onChange }) => {
  const theme = useTypedSelector((state) => state.theme.appliedTheme);

  let checkboxValue = theme.background === "#fff" ? true : false;

  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        id="checkbox"
        type="checkbox"
        checked={checkboxValue}
        onChange={(event) => onChange(event.target.checked)}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default CheckBox;

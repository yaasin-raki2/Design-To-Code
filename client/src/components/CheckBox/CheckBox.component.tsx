import { FC, useState, ChangeEvent } from "react";

import { CheckBoxInput, CheckBoxLabel, CheckBoxWrapper } from "./CheckBox.styles";

interface CheckBoxProps {
  onChange: (value: boolean) => void;
}

const CheckBox: FC<CheckBoxProps> = ({ onChange }) => {
  const [checkboxValue, setCheckboxValue] = useState(true);

  const onChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(!checkboxValue);
    onChange(event.target.checked);
  };

  console.log(checkboxValue);

  return (
    <CheckBoxWrapper>
      <CheckBoxInput
        id="checkbox"
        type="checkbox"
        checked={checkboxValue}
        onChange={onChangeCheckbox}
      />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
};

export default CheckBox;

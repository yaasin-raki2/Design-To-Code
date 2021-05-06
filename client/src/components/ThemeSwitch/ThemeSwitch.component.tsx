import { useState, FC } from "react";

import { ThemeSwitchWrapper, Moon, Sun } from "./ThemeSwitch.styles";
import sun from "../../assets/SunIcon.svg";
import moon from "../../assets/MoonIcon.svg";
import CheckBox from "../CheckBox/CheckBox.component";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const ThemeSwitch: FC = () => {
  const { setLightTheme, setDarkTheme } = useActions();

  const theme = useTypedSelector((state) => state.theme.appliedTheme);

  let checkboxValue = theme.background === "#fff" ? true : false;

  const [sunColor, setSunColor] = useState(checkboxValue ? "#FAFF00" : "#D1D1D1");
  const [moonColor, setMoonColor] = useState(checkboxValue ? "#D1D1D1" : "#8443D8");

  const onChange = () => {
    if (!checkboxValue) {
      setLightTheme();
      setSunColor("#FAFF00");
      setMoonColor("#D1D1D1");
    } else {
      setDarkTheme();
      setSunColor("#D1D1D1");
      setMoonColor("#8443D8");
    }
  };

  return (
    <ThemeSwitchWrapper>
      <Moon src={moon} color={moonColor} />
      <CheckBox onChange={onChange} checkboxValue={checkboxValue} />
      <Sun src={sun} color={sunColor} />
    </ThemeSwitchWrapper>
  );
};

export default ThemeSwitch;

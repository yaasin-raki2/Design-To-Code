import { ThemeActionTypes } from "./theme.types.d";
import { SetLightTheme, SetDarkTheme } from "./theme.actions.d";
import { light, dark } from "../../theme/theme";

export const setLightTheme = (): SetLightTheme => ({
  type: ThemeActionTypes.SET_LIGHT_THEME,
  payload: light,
});

export const setDarkTheme = (): SetDarkTheme => ({
  type: ThemeActionTypes.SET_DARK_THEME,
  payload: dark,
});

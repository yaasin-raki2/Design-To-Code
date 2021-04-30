import { ThemeActionTypes } from "./theme.types";
import { ThemeType } from "../../theme/theme";

export interface SetLightTheme {
  type: ThemeActionTypes.SET_LIGHT_THEME;
  payload: ThemeType;
}

export interface SetDarkTheme {
  type: ThemeActionTypes.SET_DARK_THEME;
  payload: ThemeType;
}

export type Action = SetLightTheme | SetDarkTheme;

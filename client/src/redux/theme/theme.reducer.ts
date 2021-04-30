import defaultTheme, { ThemeType } from "../../theme/theme";
import { ThemeActionTypes } from "./theme.types";
import { Action } from "./theme.actions.d";

interface ThemeState {
  appliedTheme: ThemeType;
}

const initialState = {
  appliedTheme: defaultTheme,
};

const themeReducer = (state: ThemeState = initialState, action: Action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_LIGHT_THEME:
    case ThemeActionTypes.SET_DARK_THEME:
      return {
        appliedTheme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { login, signUp, signout } from "../redux/user/user.actions";
import { setLightTheme, setDarkTheme } from "../redux/theme/theme.actions";

const actionCreators = { login, signUp, signout, setLightTheme, setDarkTheme };

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

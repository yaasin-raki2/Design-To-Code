import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { login, signUp, signout } from "../redux/user/user.actions";

const actionCreators = { login, signUp, signout };

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

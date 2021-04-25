import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { login, signUp } from "../redux/user/user.actions";

const actionCreators = { login, signUp };

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

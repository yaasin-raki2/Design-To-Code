import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header.component";
import SignUpPage from "./pages/SignUp/SignUp.page";
import LoginPage from "./pages/Login/Login.page";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;

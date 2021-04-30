import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header.component";
import SignUpPage from "./pages/SignUp/SignUp.page";
import LoginPage from "./pages/Login/Login.page";
import { ThemeProvider } from "styled-components";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
  const theme = useTypedSelector((state) => state.theme.appliedTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;

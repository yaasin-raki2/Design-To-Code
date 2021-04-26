import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import { Wrapper, FromWrapper, TextWrapper, SmallText, BigText } from "./Login.styles";
import FormInput from "../../components/FormInput/FormInput.component";
import Card from "../../components/Card/Card.component";
import Button from "../../components/Button/Button.component";
import { Link, useHistory } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const LoginPage: FC = () => {
  const { login } = useActions();

  const { currentUser, errors } = useTypedSelector((state) => state.user);

  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    login(userCredentials);
  };

  const history = useHistory();

  useEffect(() => {
    if (currentUser && !errors) {
      history.push("/");
    }
  }, [currentUser, errors, history]);

  return (
    <Wrapper>
      <Card width="550px" height="500px">
        <TextWrapper>
          <BigText>Log In To Your Account</BigText>
          <SmallText>
            You don't have an account ? <Link to="/signup">Sign Up</Link>
          </SmallText>
        </TextWrapper>
        <FromWrapper onSubmit={handleSubmit}>
          <div>
            <FormInput
              name="email"
              type="email"
              value={userCredentials.email}
              handleChange={handleChange}
              label="Email"
              required
            />
            <h6>{errors?.email}</h6>
          </div>
          <div>
            <FormInput
              name="password"
              type="password"
              value={userCredentials.password}
              handleChange={handleChange}
              label="Password"
              required
            />
            <h6>{errors?.password || (errors && errors["undefined"])}</h6>
          </div>
          <Button width="450px">Log In</Button>
        </FromWrapper>
      </Card>
    </Wrapper>
  );
};

export default LoginPage;

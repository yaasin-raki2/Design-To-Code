import { ChangeEvent, FC, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button.component";
import Card from "../../components/Card/Card.component";
import FormInput from "../../components/FormInput/FormInput.component";
import DropDown from "../../components/DropDown/DropDown.component";
import {
  Wrapper,
  BigText,
  SmallText,
  TextWrapper,
  InputsWrapper,
  FirstInputsWrapper,
} from "./SignUp.styles";

const SignUpPage: FC = () => {
  const [userCredentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    userType: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  console.log(userCredentials);

  return (
    <Wrapper>
      <Card width="550px">
        <TextWrapper>
          <BigText>Create Account</BigText>
          <SmallText>
            Already have an account ? <Link to="/signup">Log In</Link>
          </SmallText>
        </TextWrapper>
        <InputsWrapper>
          <FirstInputsWrapper>
            <FormInput
              name="userName"
              type="text"
              value={userCredentials.userName}
              handleChange={handleChange}
              label="Username"
              required
            />
            <DropDown
              userCredentials={userCredentials}
              setCredentials={setCredentials}
              list={["designer", "coder"]}
            />
          </FirstInputsWrapper>
          <FormInput
            name="email"
            type="email"
            value={userCredentials.email}
            handleChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={userCredentials.password}
            handleChange={handleChange}
            label="Password"
            required
          />
          <Button to="/signup" width="450px">
            Sign Up
          </Button>
        </InputsWrapper>
      </Card>
    </Wrapper>
  );
};

export default SignUpPage;

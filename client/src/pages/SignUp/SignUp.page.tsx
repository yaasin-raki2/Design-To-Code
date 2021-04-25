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
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const SignUpPage: FC = () => {
  const { signUp } = useActions();

  const errors = useTypedSelector((state) => state.user.errors);

  const [dropDown, setDropDown] = useState("");

  const [userCredentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    userType: "",
  });

  if (userCredentials.userType !== dropDown) {
    setCredentials({ ...userCredentials, userType: dropDown });
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = () => {
    signUp(userCredentials);
  };

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
            <div>
              <FormInput
                name="userName"
                type="text"
                value={userCredentials.userName}
                handleChange={handleChange}
                label="Username"
                required
              />
              <h6>{errors?.userName}</h6>
            </div>
            <div>
              <DropDown
                dropDown={dropDown}
                setDropDown={setDropDown}
                list={["designer", "coder"]}
              />
              <h6>{errors?.userType}</h6>
            </div>
          </FirstInputsWrapper>
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
            <h6>{errors?.password}</h6>
          </div>
          <Button to="/signup" width="450px" onClick={handleSubmit}>
            Sign Up
          </Button>
        </InputsWrapper>
      </Card>
    </Wrapper>
  );
};

export default SignUpPage;

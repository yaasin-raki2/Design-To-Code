import { FC } from "react";

import { Wrapper, BigText, SmallText, TextWrapper } from "./SignUp.styles";
import Button from "../../components/Button/Button.component";
import Card from "../../components/Card/Card.component";
import { Link } from "react-router-dom";

const SignUpPage: FC = () => {
  return (
    <Wrapper>
      <Card>
        <TextWrapper>
          <BigText>Create Account</BigText>
          <SmallText>
            Already have an account ? <Link to="/signup">Log In</Link>
          </SmallText>
        </TextWrapper>
        <Button to="/signup" width="450px">
          Sign Up
        </Button>
      </Card>
    </Wrapper>
  );
};

export default SignUpPage;

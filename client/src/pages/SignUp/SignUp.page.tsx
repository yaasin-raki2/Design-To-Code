import { FC } from "react";

import Button from "../../components/Button/Button.component";

const SignUpPage: FC = () => {
  return (
    <div>
      <h1>SignUp Page</h1>
      <Button to="/" width="500px">
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpPage;

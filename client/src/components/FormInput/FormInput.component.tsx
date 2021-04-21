import React from "react";

import { Group, FormInputContainer, FormInputLabel } from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...props }: any) => (
  <Group>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "hide" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </Group>
);

export default FormInput;

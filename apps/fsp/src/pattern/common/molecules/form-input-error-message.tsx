import React, { FC } from "react";
import { ErrorMessage } from "@hookform/error-message";

// Component that renders associated input's error messages.
interface IFormError {
  errors: any;
  name: string;
}

const FormInputErrorMessage: FC<IFormError> = (props) => (
  <ErrorMessage
    errors={props.errors}
    name={props.name}
    as={
      <div className='flex items-center mt-1 space-x-[8px] text-[#ff0054] text-[10px] font-[500]' />
    }
  >
    {({ messages }: Record<string, string>) =>
      messages &&
      Object.entries(messages).map(([type, message]) => (
        <p key={type}>
          {/* <span>
              <InputErrorIcon />
            </span> */}
          {message}
        </p>
      ))
    }
  </ErrorMessage>
);

export default FormInputErrorMessage;

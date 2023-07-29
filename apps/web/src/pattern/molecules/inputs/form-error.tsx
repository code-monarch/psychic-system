import React, { ElementRef, forwardRef } from "react";
import { ErrorMessage } from "@hookform/error-message";
// import { InputErrorIcon } from "../../atoms/icons/input-error-icon";

// A simple component to render associated input's error message.

interface IFormError {
  errors: any;
  name: string;
}

const FormError = forwardRef<ElementRef<"div">, IFormError>(
  (props, ref) => (
    <ErrorMessage
      errors={props.errors}
      name={props.name}
      ref={ref}
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
  )
);

FormError.displayName = "FormError";

export default FormError;

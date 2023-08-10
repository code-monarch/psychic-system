"use client";
import AnimatedPhoneInput from "../pattern/molecules/inputs/animated-phone-input";
import AnimatedInput from "@/pattern/molecules/inputs/animated-input";
import { useForm, FormProvider } from "react-hook-form";

export default function Page() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <AnimatedPhoneInput name='Phone input' animatedLabel='Phone Input' />
          <AnimatedInput name='input' animatedLabel='Input' />
        </form>
      </FormProvider>
    </>
  );
}

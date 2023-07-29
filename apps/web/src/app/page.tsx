"use client"
import { Button, Header } from "@emtech/ui";
import AnimatedPhoneInput from "../pattern/molecules/inputs/animatedPhoneInput";
import AnimatedInput from "@/pattern/molecules/inputs/animatedInput";
import { useForm, FormProvider } from "react-hook-form";

export default function Page() {
    const methods = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>
      <Header text='Web' />
      <Button>Em tech</Button>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <AnimatedPhoneInput name='Phone input' animatedLabel='Phone Input' />
          <AnimatedInput name='input' animatedLabel='Input' />
        </form>
      </FormProvider>
    </>
  );
}

import React from "react";
import InputTextComponent from "./inputTextComponent/InputTextComponent";
import SingleBigButton from "../singleBigButton/SingleBigButton";
import InputRadioComponent from "./inputRadioComponent/InputRadioComponent";
import useContactFormContext from "./hooks/useContactFormContext";

/**
 *
 * @returns JSX.Element
 *
 * contact form component
 */
const ContactForm: () => JSX.Element = () => {
  const { firstName, lastName, status } = useContactFormContext();

  return (
    <div className="flex flex-auto max-w-screen-sm flex-col p-5 mt-10 me-5 mx-5 border max-w-screen-md">
      <div className="flex justify-center items-center">
        <h5 className="text-3xl font-thin p-5">Contact Form</h5>
      </div>

      <InputTextComponent />
      <InputRadioComponent />
      <SingleBigButton />
    </div>
  );
};

export default ContactForm;

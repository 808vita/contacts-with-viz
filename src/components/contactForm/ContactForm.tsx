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
    <div>
      <InputTextComponent />
      <InputRadioComponent />
      <SingleBigButton />
    </div>
  );
};

export default ContactForm;

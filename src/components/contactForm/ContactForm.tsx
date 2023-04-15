import React from "react";
import InputTextComponent from "./inputTextComponent/InputTextComponent";
import SingleBigButton from "../singleBigButton/SingleBigButton";
import InputRadioComponent from "./inputRadioComponent/InputRadioComponent";

/**
 *
 * @returns JSX.Element
 *
 * contact form component
 */
const ContactForm: () => JSX.Element = () => {
  return (
    <div>
      <InputTextComponent />
      <InputRadioComponent />
      <SingleBigButton />
    </div>
  );
};

export default ContactForm;

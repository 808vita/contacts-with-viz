import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactFormContextProvider from "../components/contactForm/hooks/ContactFormContext";
/**
 *
 * @returns JSX.Element
 *
 * Contacts page
 *
 * create contact
 *
 * display contacts
 *
 * edit / delete contact
 *
 * display info when there are no contacts to display
 */
const Contacts: () => JSX.Element = () => {
  return (
    <ContactFormContextProvider>
      <ContactForm />
    </ContactFormContextProvider>
  );
};

export default Contacts;

import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
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
    <div>
      Contacts
      <ContactForm />
    </div>
  );
};

export default Contacts;

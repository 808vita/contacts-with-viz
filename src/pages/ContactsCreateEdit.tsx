import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactFormContextProvider from "../components/contactForm/hooks/ContactFormContext";
import { useParams } from "react-router-dom";
import EditWrapper from "../components/contactForm/EditWrapper";
import NotFound from "./NotFound";

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
 * display info when there are no contacts to display & redirect 
 */
const ContactsCreateEdit: () => JSX.Element = () => {
  const { path } = useParams();
  console.log(path, "params");

  if (path === "create") {
    return (
      <ContactFormContextProvider>
        <ContactForm />
      </ContactFormContextProvider>
    );
  }

  if (path === "edit") {
    return (
      <ContactFormContextProvider>
        <EditWrapper>
          <ContactForm />
        </EditWrapper>
      </ContactFormContextProvider>
    );
  }

  return <NotFound />;
};

export default ContactsCreateEdit;

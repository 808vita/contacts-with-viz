import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactFormContextProvider from "../components/contactForm/hooks/ContactFormContext";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/contactCard/ContactCard";

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
  const { contactList } = useSelector((state: RootState) => state.contact);
  console.log(contactList, "contactList");

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/contacts/create")}>
        Create Contact
      </button>

      {contactList.map((contact) => (
        <ContactCard key={contact?.id} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;

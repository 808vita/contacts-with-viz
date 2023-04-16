import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/contactCard/ContactCard";
import NoContactInfo from "../components/noContactInfo/NoContactInfo";

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
    <div className="flex flex-col flex-auto justify-center items-center">
      <button onClick={() => navigate("/contacts/create")}>
        Create Contact
      </button>

      {contactList.map((contact) => (
        <ContactCard key={contact?.id} contact={contact} />
      ))}
      {contactList.length === 0 && <NoContactInfo />}
    </div>
  );
};

export default Contacts;

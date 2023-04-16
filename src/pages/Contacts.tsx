import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import ContactCard from "../components/contactCard/ContactCard";

import ErrorInfoBox from "../components/noContactInfo/ErrorInfoBox";

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
      <button
        onClick={() => navigate("/contacts/create")}
        className="bg-violet-100 mt-10 me-5 mx-5 p-5 border hover:bg-violet-300"
      >
        Create Contact
      </button>

      {contactList.map((contact) => (
        <ContactCard key={contact?.id} contact={contact} />
      ))}
      {contactList.length === 0 && (
        <ErrorInfoBox>
          <>
            <h5 className="text-2xl">No Contact Found.</h5>
            <h5 className="text-2xl">
              Please add contact from Create Contact Button
            </h5>
          </>
        </ErrorInfoBox>
      )}
    </div>
  );
};

export default Contacts;

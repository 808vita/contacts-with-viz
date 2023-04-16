import React from "react";
import ButtonEditDelete from "./buttonEditDelete/ButtonEditDelete";
import { ContactData } from "../../redux/slices/contactSlice";

/**
 *
 * @returns JSX.Element
 *
 * contact card component
 */

interface Props {
  contact: ContactData;
}
/**
 *
 * @param ContactData
 * @returns jsx
 *
 * contact card component
 */
const ContactCard = ({ contact }: Props) => {
  return (
    <div>
      <div key={contact?.id}>
        <div>
          <p>{contact?.id}</p>
          <p>{contact?.firstName}</p>
          <p>{contact?.lastName}</p>
          <p>{contact?.status}</p>

          <ButtonEditDelete contactId={contact?.id} />
        </div>
        <br />
      </div>
    </div>
  );
};

export default ContactCard;

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
    <div className="flex justify-center items-center w-full mt-5 md:m-5">
      <div className="flex flex-col w-full max-w-sm p-5 border">
        <h5 className="text-xl self-center font-medium mb-5 mt-5 ">
          Contact Details
        </h5>

        <div className="">
          <div className="flex justify-center items-center mt-2">
            <p className="w-2/5  text-lg font-medium">ID</p>
            <p className="w-2/5 text-xl">{contact?.id}</p>
          </div>
          <span className="flex justify-center items-center  mt-2">
            <p className="w-2/5 text-lg font-medium">First Name</p>
            <p className="w-2/5 text-xl">{contact?.firstName}</p>
          </span>

          <span className="flex justify-center items-center mt-2">
            <p className="w-2/5 text-lg font-medium">Last Name</p>
            <p className="w-2/5 text-xl">{contact?.lastName}</p>
          </span>

          <span className="flex justify-center items-center mt-2">
            <p className="w-2/5 text-lg font-medium">Status</p>
            <p className="w-2/5 text-xl">{contact?.status}</p>
          </span>
        </div>
        <ButtonEditDelete contactId={contact?.id} />
      </div>
    </div>
  );
};

export default ContactCard;

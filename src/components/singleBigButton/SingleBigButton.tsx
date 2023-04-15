import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addContact } from "../../redux/slices/contactSlice";

interface contactData {
  firstName: string;
  lastName: string;
  status: string;
}

interface contactDataWithId extends contactData {
  id: string;
}

interface Props {
  data: contactData;
}

const SingleBigButton = ({ data }: Props) => {
  const contactList = useSelector((state: RootState) => state.contact);
  const dispatch = useDispatch();

  /**
   * add new contact to store
   * and redirect back to contact page
   */
  const addContactToStore = () => {
    const genId = String(new Date().getTime());

    const contactWithId: contactDataWithId = { ...data, id: genId };

    console.log("contactWithId", contactWithId);
    console.log("contactList", contactList);
    dispatch(addContact(contactWithId));
  };

  /**
   * check url path
   * conditionally allow the required function
   *
   * "/create" -> then addContactToStore
   * "/edit" -> then editContactInStore
   */
  const clickHandler = () => {
    console.log("clicked");
    addContactToStore();
  };

  const buttonText = "oof";

  return <button onClick={clickHandler}>{buttonText}</button>;
};

export default SingleBigButton;

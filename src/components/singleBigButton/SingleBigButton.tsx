import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addContact, editContact } from "../../redux/slices/contactSlice";
import { useNavigate, useParams } from "react-router-dom";
import useContactFormContext from "../contactForm/hooks/useContactFormContext";
interface contactData {
  firstName: string;
  lastName: string;
  status: string;
}

export interface contactDataWithId extends contactData {
  id: string;
}

const SingleBigButton = () => {
  const { firstName, lastName, status, editId } = useContactFormContext();
  const contactList = useSelector((state: RootState) => state.contact);

  const { path } = useParams();
  console.log(path, "params");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  /**
   * add new contact to store
   * and redirect back to contact page
   */
  const addContactToStore = () => {
    const genId = String(new Date().getTime());

    const contactWithId: contactDataWithId = {
      firstName,
      lastName,
      status,
      id: genId,
    };

    console.log("contactWithId", contactWithId);
    console.log("contactList", contactList);
    dispatch(addContact(contactWithId));
    navigate("/contacts");
  };

  /**
   * edit a contact in store using id
   * and redirect back to contact page
   */
  const editContactInStore = () => {
    const genId = String(new Date().getTime());

    const contactWithId: contactDataWithId = {
      firstName,
      lastName,
      status,
      id: editId,
    };

    console.log("contactWithId", contactWithId);
    console.log("contactList", contactList);

    dispatch(editContact(contactWithId));

    navigate("/contacts");
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

    if (path === "create") {
      addContactToStore();
      return;
    }

    if (path === "edit") {
      console.log("edit oof");

      // need validations
      // check if id exists?
      editContactInStore();
      return;
    }
  };

  const buttonText = "oof";

  return (
    <button
      onClick={clickHandler}
      className="text-xl bg-violet-100 mt-10 mb-5 me-5 mx-5 p-5 border hover:bg-violet-300"
    >
      {path === "create"
        ? "Save Contact"
        : path === "edit"
        ? "Save Edited Contact"
        : "default button"}
    </button>
  );
};

export default SingleBigButton;

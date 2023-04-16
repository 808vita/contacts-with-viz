import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../../../redux/slices/contactSlice";

interface Props {
  contactId: string;
}
/**
 *
 * @param contactId
 * @returns jsx
 *
 * edit delete button component for contact card
 *
 */
const ButtonEditDelete = ({ contactId }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * on edit button click route to edit form
   */
  const handleEditClick = () => {
    navigate(`/contacts/edit?cid=${contactId}`);
  };

  /**
   * on delete button click delete the current item from store using the id
   */
  const handleDeleteClick = () => {
    console.log("clicked del : " + contactId);

    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <button onClick={handleEditClick}>edit contact</button>
      <br />

      <button onClick={handleDeleteClick}>delete</button>
    </div>
  );
};

export default ButtonEditDelete;

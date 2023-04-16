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
      <button
        className="text-2xl font-thin p-2 mt-5 mb-5 border w-full bg-lime-100 hover:bg-lime-300"
        onClick={handleEditClick}
      >
        Edit
      </button>

      <button
        className="text-2xl font-thin p-2 mb-5 border w-full  bg-red-100 hover:bg-red-400"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  );
};

export default ButtonEditDelete;

import React, { useEffect } from "react";
import { PropsChildren } from "./hooks/ContactFormContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useContactFormContext from "./hooks/useContactFormContext";
import ErrorInfoBox from "../noContactInfo/ErrorInfoBox";

/**
 * 
 * @param param0 
 * @returns jsx
 * 
 * edit wrapper component used for following things:
 * 
 * load the contact data if url cid mathces
 * 
 * show error and redirect if there no matching contact in the redux store
 */
const EditWrapper = ({ children }: PropsChildren) => {
  const [searchParams] = useSearchParams();
  const cid = searchParams.get("cid");
  // console.log(cid, "editContactId");

  const { editId, setEditId, setFirstName, setLastName, setStatus } =
    useContactFormContext();

  const { contactList } = useSelector((state: RootState) => state.contact);
  // console.log(contactList, "contactList");

  const [editContactData] = contactList.filter(
    (contact) => contact?.id === cid
  );
  // console.log(editContactData, "editContactData");

  const navigate = useNavigate();

  useEffect(() => {
    if (editId === "" && editContactData?.id) {
      setEditId(editContactData?.id);
      setFirstName(editContactData?.firstName);
      setLastName(editContactData?.lastName);
      setStatus(editContactData?.status);
    }
  }, []);

  if (!editContactData?.id) {
    // if not valid contact id
    // display error info and redirect to contacts page
    // console.log("does not exists -> redirect logic");
    setTimeout(() => navigate("/contacts"), 2000);

    return (
      <ErrorInfoBox>
        <h5 className="text-2xl">Check contact id! Redirecting in 2 secs...</h5>
      </ErrorInfoBox>
    );
  }

  return <div>{children}</div>;
};

export default EditWrapper;

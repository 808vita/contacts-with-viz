import React, { useEffect } from "react";
import { Props } from "./hooks/ContactFormContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useContactFormContext from "./hooks/useContactFormContext";
import ErrorInfoBox from "../noContactInfo/ErrorInfoBox";

const EditWrapper = ({ children }: Props) => {
  const [searchParams] = useSearchParams();
  const cid = searchParams.get("cid");
  console.log(cid, "editContactId");

  const { editId, setEditId, setFirstName, setLastName, setStatus } =
    useContactFormContext();

  const { contactList } = useSelector((state: RootState) => state.contact);
  console.log(contactList, "contactList");

  const [editContactData] = contactList.filter(
    (contact) => contact?.id === cid
  );
  console.log(editContactData, "editContactData");

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
    console.log("does not exists -> redirect logic");
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

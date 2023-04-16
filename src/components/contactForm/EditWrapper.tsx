import React from "react";
import { Props } from "./hooks/ContactFormContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useContactFormContext from "./hooks/useContactFormContext";

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
  if (!editContactData?.id) {
    console.log("does not exists -> redirect logic");
    setTimeout(() => navigate("/contacts"), 2000);

    return (
      <div>
        <h4>Check contact id! Redirecting in 2 secs... </h4>
      </div>
    );
  }
  if (editId === "") {
    setEditId(editContactData?.id);
    setFirstName(editContactData?.firstName);
    setLastName(editContactData?.lastName);
    setStatus(editContactData?.status);
  }

  return <div>EditWrapper{children}</div>;
};

export default EditWrapper;

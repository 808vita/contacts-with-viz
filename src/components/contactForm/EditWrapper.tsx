import React from "react";
import { Props } from "./hooks/ContactFormContext";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const EditWrapper = ({ children }: Props) => {
  const [searchParams] = useSearchParams();

  console.log(searchParams.get("cid"), "searchParams");
  const { contactList } = useSelector((state: RootState) => state.contact);
  console.log(contactList, "contactList");
  return <div>EditWrapper{children}</div>;
};

export default EditWrapper;

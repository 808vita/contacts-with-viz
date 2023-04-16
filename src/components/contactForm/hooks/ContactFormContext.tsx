import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";

export interface Props {
  children: ReactNode;
}

interface ContactContextInterface {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
}

export const ContactFormContext = createContext<ContactContextInterface>({
  firstName: "",
  setFirstName: () => {},
  lastName: "",
  setLastName: () => {},
  status: "",
  setStatus: () => {},
  editId: "",
  setEditId: () => {},
});

const ContactFormContextProvider = ({ children }: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<string>("Inactive");
  const [editId, setEditId] = useState<string>("");

  return (
    <ContactFormContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        status,
        setStatus,
        editId,
        setEditId,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};

export default ContactFormContextProvider;

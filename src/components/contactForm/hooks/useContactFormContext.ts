import { useContext } from "react";

import { ContactFormContext } from "./ContactFormContext";

const useContactFormContext = () => {
  const context = useContext(ContactFormContext);

  return context;
};

export default useContactFormContext;

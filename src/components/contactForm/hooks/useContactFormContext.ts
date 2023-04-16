import { useContext } from "react";

import { ContactFormContext } from "./ContactFormContext";

/**
 * 
 * @returns context
 * 
 * hook - useContactFormContext 
 * to be used by contact form
 */
const useContactFormContext = () => {
  const context = useContext(ContactFormContext);

  return context;
};

export default useContactFormContext;

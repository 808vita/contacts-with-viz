import React from "react";
import useContactFormContext from "../hooks/useContactFormContext";

const InputRadioComponent = () => {
  const { status, setStatus } = useContactFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOption = e?.target?.value;
    setStatus(selectedOption);
  };

  return (
    <div>
      Status:
      <div>
        <input
          type="radio"
          value="Active"
          name="staus"
          checked={status === "Active"}
          onChange={handleChange}
        />
        Active
        <input
          type="radio"
          value="Inactive"
          name="staus"
          checked={status === "Inactive"}
          onChange={handleChange}
        />
        Inactive
      </div>
    </div>
  );
};

export default InputRadioComponent;

import React, { useState } from "react";

const InputTextComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const placeholder = "oof place";

  return (
    <div>
      <div className="card pt-5 pb-5 pe-md-5 px-md-5 mb-5">
        <label htmlFor="fName">First Name:</label>
        <input
          id="fName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder={placeholder}
          required
        />
        <br />

        <label htmlFor="lName">Last Name:</label>
        <input
          id="lName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder={placeholder}
          required
        />
        <br />
      </div>
    </div>
  );
};

export default InputTextComponent;

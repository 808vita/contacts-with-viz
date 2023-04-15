import React from "react";

const InputRadioComponent = () => {
  return (
    <div>
      Status:
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
        />
        <label className="form-check-label" htmlFor="exampleRadios1">
          Active
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="option2"
          checked
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Inactive
        </label>
      </div>
    </div>
  );
};

export default InputRadioComponent;

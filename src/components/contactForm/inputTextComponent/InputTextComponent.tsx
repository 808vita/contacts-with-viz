import useContactFormContext from "../hooks/useContactFormContext";

const InputTextComponent = () => {
  const { firstName, setFirstName, lastName, setLastName } =
    useContactFormContext();

  return (
    <div>
      <div className="card pt-5 pb-5 pe-md-5 px-md-5 mb-5">
        <label htmlFor="fName">First Name:</label>
        <input
          id="fName"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter first name"
          required
        />
        <br />

        <label htmlFor="lName">Last Name:</label>
        <input
          id="lName"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter last name"
          required
        />
        <br />
      </div>
    </div>
  );
};

export default InputTextComponent;

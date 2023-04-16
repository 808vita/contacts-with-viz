import useContactFormContext from "../hooks/useContactFormContext";

const InputTextComponent = () => {
  const { firstName, setFirstName, lastName, setLastName } =
    useContactFormContext();

  return (
    <div className="w-full">
      <div className=" flex flex-col justify-center items-center pt-5 pb-5">
        <div className=" flex justify-center items-center mt-5 mb-5 w-full">
          <label htmlFor="fName" className="text-xl font-thin m-5 w-1/5">
            First Name
          </label>
          <input
            id="fName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            required
            className="w-4/5 p-5 border bg-violet-100"
          />
        </div>

        <div className=" flex justify-center items-center mt-5 mb-5 w-full">
          <label htmlFor="lName" className="text-xl font-thin m-5 w-1/5">
            Last Name
          </label>
          <input
            id="lName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            required
            className="w-4/5 p-5 border bg-violet-100"
          />
        </div>
      </div>
    </div>
  );
};

export default InputTextComponent;
